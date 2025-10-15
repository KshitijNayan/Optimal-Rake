"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterParagraphProps {
  text: string
  className?: string
  typingSpeed?: number
  delay?: number
}

export default function TypewriterParagraph({
  text,
  className = "",
  typingSpeed = 50,
  delay = 500,
}: TypewriterParagraphProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [isVisible])

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(typeInterval)
        }
      }, typingSpeed)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, text, typingSpeed, delay])

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } ${className}`}
    >
      <p className="text-lg leading-relaxed">
        {displayedText}
        {isTyping && <span className="animate-pulse border-r-2 border-gray-800 dark:border-gray-200 ml-1">|</span>}
      </p>
    </div>
  )
}

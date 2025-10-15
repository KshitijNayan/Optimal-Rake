import { useState, useEffect } from 'react'

export default function Navbar({ title = "", item1 = "Events", item2 = "Inventory", item3 = "Announcements", item4 = "Orders", item5 = "Dashboard"}) {
    const [isWide, setIsWide] = useState(typeof window !== 'undefined' ? window.innerWidth > 700 : true)

    useEffect(() => {
        const handleResize = () => setIsWide(window.innerWidth > 700)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50">
            <div className={`backdrop-blur-sm bg-[rgba(49,54,84,0.42)] rounded-2xl py-2 px-4 flex items-center justify-between shadow-lg`}>
                <a href="/" className="flex items-center gap-3 text-white no-underline">
                    <img src="/SAIL.png" alt="Logo" className={isWide ? 'w-[70px] h-[40px]' : 'w-[56px] h-[32px]'} />
                    <span className="font-semibold text-lg">{title}</span>
                </a>

                <ul className="hidden sm:flex items-center gap-6">
                    <li><a href="/dashboard" className="text-white hover:underline">{item5}</a></li>
                    <li><a href="/inventory" className="text-white hover:underline">{item2}</a></li>
                    <li><a href="/orders" className="text-white hover:underline">{item4}</a></li>
                    <li><a href="/events" className="text-white hover:underline">{item1}</a></li>
                    <li><a href="/announcements" className="text-white hover:underline">{item3}</a></li>
                </ul>

                {/* Mobile menu (simple) */}
                <div className="sm:hidden">
                    <select
                        className="bg-transparent text-white p-1 rounded"
                        onChange={(e) => { const v = e.target.value; if (v) window.location.href = v }}
                        aria-label="Navigation"
                    >
                        <option value="">Menu</option>
                        <option value="/dashboard">{item5}</option>
                        <option value="/inventory">{item2}</option>
                        <option value="/orders">{item4}</option>
                        <option value="/events">{item1}</option>
                        <option value="/announcements">{item3}</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}
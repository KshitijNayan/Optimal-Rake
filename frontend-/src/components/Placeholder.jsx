import React, {useState, useEffect} from "react"
import TypewriterParagraph from "./typewriter-paragraph.tsx";

const Placeholder = () => {

    const [isWide, setIsWide] = useState(window.innerWidth > 700);
        useEffect(() => {
            const handleResize = () => {
                setIsWide(window.innerWidth > 700);
            };
            window.addEventListener('resize', handleResize);
            // Clean up on unmount
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <>
            <div className="card-dark col-3 mx-4 my-4 shadow-lg p-3 mb-5 " style={{backgroundImage:'linear-gradient(120deg, rgb(160,147,147,0.3), rgb(0,0,0,0.3))', padding:'20px', borderRadius:'20px', minWidth:'200px'}}>
                <img src="/Confused Student.jpg" className="card-img-top my-2" style={isWide?{width:'60%', maxWidth:'150px'}:{width:'30%', minWidth:'75px'}} alt="..."/>
                    <div className="card-body" style={{color:'white'}}>
                        <h5 className="card-title"><TypewriterParagraph text="Confused?" typingSpeed={72} delay={300} /></h5>
                        <p className="card-text"><TypewriterParagraph text="New to the Platform? Don't Worry.." typingSpeed={100} delay={1000} /></p>
                        <a href="/collaborators" className="btn btn-primary">Illustration</a>
                    </div>
            </div>
        </>
    )
}

export default Placeholder;
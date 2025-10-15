import { useState, useEffect, useRef } from 'react';


export default function Pagination() {

    const [active, setActive] = useState(false);
    const timerRef = useRef(null);
    const idleTimeRef = useRef(null);

    const handleEnter = () => {
        setActive(true);

        // Reset timer if already running
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setActive(false);
        }, 3000);
    };

    const handleLeave = () => {
        clearTimeout(timerRef.current);
        setActive(false);
    };

    const handleMouseMove = () => {
        clearTimeout(idleTimeRef.current);
        idleTimeRef.current = setTimeout(() => {
            setActive(false);
        }, 3000); // 3 seconds of idle triggers reset
    };

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
            clearTimeout(idleTimeRef.current);
        };
    }, []);

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
            <nav style={{ display: 'flex', justifyContent: 'center', paddingBottom: isWide ? '10%' : '5%', paddingTop: '20px' }}>
                <ul className="pagination" >
                    <><li className="page-item"><a className="page-link" href="/collaborators" style={{ backgroundColor: 'transparent', fontSize: isWide ? '20px' : '17px' }}>About SAIL</a></li></>
                    <><li className="page-item"><a className="page-link" href="/collaborators" style={{ backgroundColor: 'transparent', fontSize: isWide ? '20px' : '17px' }}>Collaborators</a></li></>
                    <><li className="page-item"><a className="page-link" href="/services" style={{ backgroundColor: 'transparent', fontSize: isWide ? '20px' : '17px' }}>Services</a></li></>
                </ul>
            </nav>
        </>
    )
}
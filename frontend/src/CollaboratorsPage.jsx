import { useState, useEffect } from 'react'

export default function Collaborators() {

    const [is7Wide, setIs7Wide] = useState(window.innerWidth > 700);
    useEffect(() => {
        const handleResize = () => {
            setIs7Wide(window.innerWidth > 700);
        };
        window.addEventListener('resize', handleResize);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isWide, setIsWide] = useState(window.innerWidth > 800);
    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth > 800);
        };
        window.addEventListener('resize', handleResize);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isExtraWide, setIsExtraWide] = useState(window.innerWidth > 1000);
    useEffect(() => {
        const handleResize2 = () => {
            setIsExtraWide(window.innerWidth > 1000);
        };
        window.addEventListener('resize', handleResize2);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize2);
    }, []);
    const [isExtraExtraWide, setIsExtraExtraWide] = useState(window.innerWidth > 1300);
    useEffect(() => {
        const handleResize3 = () => {
            setIsExtraExtraWide(window.innerWidth > 1300);
        };
        window.addEventListener('resize', handleResize3);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize3);
    }, []);

    return (
        <>
            <h2 className='mx-4' style={{ color: 'black', paddingTop: is7Wide ? '130px' : '90px', marginLeft: '5%', paddingLeft: '5%' }}>Collaborators</h2>
            <hr style={{ color: 'black', width: isWide ? isExtraWide ? isExtraExtraWide ? '25%' : '30%' : '40%' : '52%', border: '1px solid gray', marginLeft: '5%' }} />
            <br></br>
        </>
    )
}
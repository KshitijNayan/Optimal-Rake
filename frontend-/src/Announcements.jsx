import {useState, useEffect} from 'react'

export default function Announcements() {

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

    return(
        <>
            <h2 className='mx-4' style={{color:'white', paddingTop:is7Wide?'80px':'50px', paddingLeft:'5%' }}>New Announcements</h2>
            <hr style={{ color: 'white', width: is7Wide?isWide?isExtraWide?isExtraExtraWide?'27%':'30%':'37%':'48%':'60%', border: '1px solid gray', marginLeft:'5%' }} />
            <br></br>
            <p className='mx-5' style={{textDecoration:'none', color:'rgb(178, 170, 170)', paddingLeft:'5%' }}>No new announcements.</p>
            <br></br>
            <br></br>
            <hr style={{ color: 'white', width: '90%', border: '1px solid gray', marginLeft:'5%' }} />
            <h2 className='mx-4' style={{color:'white', paddingLeft:'5%'}}>Previous announcements</h2>
            <hr style={{ color: 'white', width: is7Wide?isWide?isExtraWide?isExtraExtraWide?'30%':'35%':'47%':'55%':'72%', border: '1px solid gray', marginLeft:'5%' }} />
            <br></br>
            <p className='mx-5' style={{textDecoration:'none', color:'rgb(178, 170, 170)', overflowY:'auto', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(120deg,rgba(160, 147, 147, 0.2),rgba(0,0,0,0.2))', padding: '10px 12px', borderRadius: '10px',maxHeight:'400px', paddingLeft:'5%' }}>No previous announcements.</p>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}
import { useState, useEffect } from 'react'

export default function Navbar({ title = "         ", item1 = "Dashboard", item2 = "Dashboard", item3 = "Collaborators", item4 = "Orders", item5 = "Dashboard"}) {

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
        <nav className="navbar navbar-expand-lg fixed-top" style={{padding:'10px', borderRadius:'50px', width:'90%',textAlign:'center', margin:'auto', top:isWide?'35px':'15px', backgroundColor:'rgba(49, 54, 84, 0.41)'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={`/SAIL.png`} alt="Logo" style={isWide ? { width: '70px', height: '40px' } : { width: '65px', height:'34px' }} className="d-inline-block align-text-top" />{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{padding:'2px 2px'}} data-bs-theme="dark" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto-light mb-2 mb-lg-0" style={{textAlign: 'left'}} >
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color:'rgb(255, 255, 255)', marginLeft:'20px'}} aria-current="page" href="/dashboard">{item5}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color:'rgb(255, 255, 255)', marginLeft:'20px'}} aria-current="page" href="/inventory">{item2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color:'rgb(255, 255, 255)', marginLeft:'20px'}} aria-current="page" href="/orders">{item4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color:'rgb(255, 255, 255)', marginLeft:'20px'}} aria-current="page" href="/events">{item1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color:'rgb(255, 255, 255)', marginLeft:'20px'}} aria-current="page" href="/announcements">{item3}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
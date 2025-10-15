import { useState, useEffect } from 'react'
// import 'flowbite'
import './eventGallery.css'

export default function Event() {

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
            <h2 className='mx-4' style={{ color: 'white', paddingTop: is7Wide ? '80px' : '50px', marginLeft: '5%', paddingLeft: '5%' }}>Upcoming Events</h2>
            <hr style={{ color: 'white', width: isWide ? isExtraWide ? isExtraExtraWide ? '25%' : '30%' : '40%' : '52%', border: '1px solid gray', marginLeft: '5%' }} />
            <br></br>
            <p className='mx-5' style={{ textDecoration: 'none', color: 'rgb(178, 170, 170)', paddingLeft: '5%' }}>No upcoming events.</p>
            <br></br>
            <br></br>
            <hr style={{ color: 'white', width: '90%', border: '1px solid gray', marginLeft: '5%' }} />
            <h2 className='mx-4' style={{ color: 'white', paddingLeft: '5%' }}>Event Gallery</h2>
            <hr style={{ color: 'white', width: isWide ? isExtraWide ? isExtraExtraWide ? '20%' : '25%' : '30%' : '40%', border: '1px solid gray', marginLeft: '5%' }} />


            {/* <div class={`grid grid-cols-2 md:grid-cols-4 gap-3`} style={{paddingRight:'7%', paddingLeft:'7%'}}>
                <div class="grid gap-3">
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-3">
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"/>
                    </div>
                </div>
                <div class="grid gap-3">
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"/>
                    </div>
                </div>
                <div class="grid gap-3">
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"/>
                    </div>
                    <div>
                        <img className="hover-zoom-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"/>
                    </div>
                </div>
            </div> */}

            <br></br>
        </>
    )
}
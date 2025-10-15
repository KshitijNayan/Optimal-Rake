import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SocialIcons = () => {

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
    <div className={`d-flex justify-content-center gap-${isWide?5:3} my-3 shadow-lg p-2`}>
      <p
        style={{ backgroundColor: 'transparent', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', backgroundImage: 'linear-gradient(120deg,rgba(54, 48, 48, 0.2),rgba(147, 51, 51, 0.2))',borderRadius:'10px', paddingTop:'12px', paddingBottom:'10px', paddingLeft:'20px', paddingRight:'20px',textDecoration:'none', textAlign:'left'  }}
      >
        <div>
        <i className="text-center" style={{ fontSize: isWide?'22px':'18px',display: 'flex', textDecoration:'none'}}>Know More..</i>
        </div>
      </p>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram" style={{ fontSize: isWide?'40px':'35px', color: '#E4405F' }}></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"

      >
        <i className="bi bi-youtube" style={{ fontSize: isWide?'40px':'35px', color: 'rgb(202, 39, 39)' }}></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-facebook" style={{ fontSize: isWide?'40px':'35px', color: '#4267B2' }}></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-telegram" style={{ fontSize: isWide?'40px':'35px', color: '#0088cc' }}></i>
      </a>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin" style={{ fontSize: isWide?'40px':'35px', color: 'rgb(3, 91, 135)' }}></i>
      </a>
    </div>
  );
};

export default SocialIcons;

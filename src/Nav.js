import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img 
      className="nav_logo" 
      src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" 
      alt="Netflix-Logo"/>
      <img 
      className="nav_avatar" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnY4Op9kV2nfAthF3nw5Kzwj_qSKZ5iQ0yN_-hyh6la0ul5eUO9Mt1MsfzGikz7O69iQ&usqp=CAU" 
      alt="Netflix-Logo"/>
      
    </div>
  )
}

export default Nav

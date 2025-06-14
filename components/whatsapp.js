import React from 'react';
import Link from 'next/link'
import Script from 'next/script'

import { FaWhatsappSquare } from "react-icons/fa";

const WhatsaApp = () => {

  const [isHovered, setIsHovered] = React.useState(false); 

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <a  onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave} href="https://wa.me/966560608889?text=Hi%20show%20your%20service%20in%20Website%20I need%20more%20info">
    <div style={styles.container}>
      
    
      <img src="assets/zahra/wts.svg" alt="Zahrat car service" style={styles.image} />
      {/* {isHovered && ( 
          <div style={styles.hoverText}>Whatsapp Us</div>
        )} */}
    </div>
    <div  style={styles.containers}>
    <Script
        id="zsiqchat"
        type="text/javascript"
        strategy="afterInteractive"
        style={{
          position: 'absolute',
          bottom: "10rem",
          right: 0,
          margin: '20px',
          zIndex: 9999,
        }}
      >
        {`
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {widgetcode: "siq3a8e52286a754a34f765129810049b61e88cfe5af1e99a1934d5ad4bcccc28b6bc6c8643ccdcc32e156559414025ad17", values:{},ready:function(){}};
          var d=document;
          s=d.createElement("script");
          s.type="text/javascript";
          s.id="zsiqscript";
          s.defer=true;
          s.src="https://salesiq.zohopublic.com/widget";
          t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
        `}
      </Script>
    </div>
    </a>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 65,
    right: 0,
    margin: '20px', 
    zIndex: 9999,
  },
  containers: {
    position: 'absolute',
    bottom: 120,
    right: 0,
    margin: '20px', 
    zIndex: 9999,
  },
  image: {
    width: '60px', 
    height: 'auto', 
  },
};

export default WhatsaApp;

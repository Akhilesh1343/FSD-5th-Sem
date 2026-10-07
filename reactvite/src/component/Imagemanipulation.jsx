import React, { useState } from 'react';
import dog from '../images/dog.png';

function Imagemanipulation() {
  const [height, setHeight] = useState(150);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  function enhanceHeight() {
    setHeight(height + 10);
  }

  function changeColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      paddingTop: '30px' 
    }}>
      {/* Top Center Title in RED */}
      <h1 style={{ color: 'red', margin: '0 0 20px 0', textAlign: 'center' }}>
        Image Manipulation
      </h1>

      {/* Structure with black border - background color changes here */}
      <div style={{ 
        border: '2px solid black', 
        height: '350px', 
        width: '350px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        paddingTop: '15px',
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        transition: 'background-color 0.3s ease'
      }}>
        {/* Dog image at top center inside the box */}
        <img 
          src={dog} 
          alt="dog" 
          height={height} 
          width={150} 
          style={{ objectFit: 'contain' }} 
        />
      </div>

      {/* Sirf 2 Buttons: Enhance Height aur Change Color */}
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={enhanceHeight} 
          style={{ marginRight: '15px', padding: '8px 16px', fontSize: '15px', cursor: 'pointer' }}
        >
          Enhance Height
        </button>
        <button 
          onClick={changeColor} 
          style={{ padding: '8px 16px', fontSize: '15px', cursor: 'pointer' }}
        >
          Change Color
        </button>
      </div>
    </div>
  );
}

export default Imagemanipulation;
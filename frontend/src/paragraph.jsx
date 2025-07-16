import React from 'react'

export default function Paragraph() {
  return (
    <div className=''>
      <p className='paragraph-content-1 selectedgreen'>
        Hey there! I'm Yash — a recent high school graduate passionate about building cool and meaningful projects. 
        I’m currently learning by doing, experimenting with technologies, 
        and constantly pushing myself to grow as a developer.
        I love combining functionality with clean design. Python is my favorite language, and 
        I’m currently learning full-stack web development using it.
        So far, I’ve worked with tools like React, Flask, Bootstrap, Git, and VS Code. I learn by building, 
        and yap yap yap yap yap yap
      </p>
    </div>
  )
}

export function TerminalInfo() {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      fontFamily: 'monospace',
      fontSize: '15px',
      padding: '25px',
      borderRadius: '10px',
      lineHeight: '1.8',
      marginTop: '0px',
      overflowX: 'auto',
      color: '#ffffff'
    }}>
      <div>
        <span style={{ color: '#ff6ac1' }}>yashlgn</span>
        <span style={{ color: '#ffffff' }}>@</span>
        <span style={{ color: '#4cffa1' }}>yash-machine</span>
        <span style={{ color: '#ffffff' }}>:~$</span>
        <span style={{ marginLeft: '5px', color: '#8be9fd' }}>neofetch</span>
      </div>

      <br />

      <div>
        <span style={{ color: '#f1fa8c' }}>Kernel:</span> <span style={{ color: '#50fa7b' }}>24.5.0</span><br />
        <span style={{ color: '#f1fa8c' }}>Uptime:</span> <span style={{ color: '#50fa7b' }}>32 days, 9 hours, 28 mins</span><br />
        <span style={{ color: '#f1fa8c' }}>Packages:</span> <span style={{ color: '#50fa7b' }}>12 (brew)</span><br />
        <span style={{ color: '#f1fa8c' }}>Shell:</span> <span style={{ color: '#50fa7b' }}>zsh 5.9</span><br />
        <span style={{ color: '#f1fa8c' }}>Resolution:</span> <span style={{ color: '#50fa7b' }}>1440x900</span><br />
        <span style={{ color: '#f1fa8c' }}>DE:</span> <span style={{ color: '#50fa7b' }}>Aqua</span><br />
        <span style={{ color: '#f1fa8c' }}>WM:</span> <span style={{ color: '#50fa7b' }}>Quartz Compositor</span><br />
        <span style={{ color: '#f1fa8c' }}>WM Theme:</span> <span style={{ color: '#50fa7b' }}>Purple (Dark)</span><br />
        <span style={{ color: '#f1fa8c' }}>Terminal Font:</span> <span style={{ color: '#50fa7b' }}>Monaco</span>
      </div>

      <br />

      <div>
        <span style={{ color: '#ff6ac1' }}>yashlgn</span>
        <span style={{ color: '#ffffff' }}>@</span>
        <span style={{ color: '#4cffa1' }}>yash-machine</span>
        <span style={{ color: '#ffffff' }}>:~$</span>
        <span className="blinking-cursor" style={{
          display: 'inline-block',
          width: '10px',
          backgroundColor: '#ffffff',
          marginLeft: '5px',
          animation: 'blink 1s step-start infinite',
          height: '1em',
          verticalAlign: 'bottom'
        }}></span>
      </div>

      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

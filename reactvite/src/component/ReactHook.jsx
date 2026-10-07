import React, { useState } from 'react'

function ReactHook() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
      <h2 style={{ color: '#334155', margin: '0 0 10px 0' }}>React Hook Counter</h2>
      <h1 style={{ fontSize: '48px', margin: '12px 0', color: '#2563eb' }}>Counter Value: {counter}</h1>
      <button 
        onClick={increaseCounter}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          color: '#ffffff',
          backgroundColor: '#2563eb',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        }}
      >
        Increase Counter Value
      </button>
    </div>
  )
}

export default ReactHook
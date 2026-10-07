import React, { useState } from 'react';

function UseReactState() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCounter = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Counter</h2>
        
        <div style={styles.countDisplay}>
          <span style={styles.countNumber}>{count}</span>
        </div>

        <div style={styles.buttonContainer}>
          <button 
            style={styles.increaseButton}
            onClick={increaseCounter}
          >
            Increase Counter
          </button>
          
          <button 
            style={styles.secondaryButton}
            onClick={decreaseCounter}
          >
            Decrease
          </button>

          <button 
            style={styles.resetButton}
            onClick={resetCounter}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '60px',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 40px',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e2e8f0',
    minWidth: '320px',
  },
  heading: {
    margin: '0 0 16px 0',
    fontSize: '22px',
    fontWeight: '600',
    color: '#334155',
  },
  countDisplay: {
    margin: '12px 0 24px 0',
    padding: '16px 36px',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
  },
  countNumber: {
    fontSize: '52px',
    fontWeight: '700',
    color: '#2563eb',
    lineHeight: '1',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  increaseButton: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
  },
  secondaryButton: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569',
    backgroundColor: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  resetButton: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#dc2626',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default UseReactState;

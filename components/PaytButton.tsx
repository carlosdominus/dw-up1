
import React from 'react';

const PaytButton: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <a 
        href="#" 
        payt_action="oneclick_buy" 
        data-object="LYZYJ4-4NG9J3" 
        style={{
          background: 'rgb(12, 178, 124)',
          color: 'rgb(255, 255, 255)',
          padding: '18px 32px',
          textDecoration: 'none',
          fontSize: '24px',
          fontWeight: '900',
          fontFamily: 'Inter, sans-serif',
          borderRadius: '24px',
          display: 'block',
          margin: '20px auto',
          width: '100%',
          maxWidth: 'max-content',
          boxShadow: '0 20px 40px -10px rgba(12, 178, 124, 0.4)',
          textTransform: 'uppercase',
          letterSpacing: '-0.025em',
          transition: 'transform 0.2s ease'
        }}
        className="animate-pulse-custom active:scale-95"
      >
        QUERO MINHA CONSULTA AGORA
      </a>
      <select payt_element='installment' style={{ display: 'none' }} data-object='LYZYJ4-4NG9J3'></select>
    </div>
  );
};

export default PaytButton;
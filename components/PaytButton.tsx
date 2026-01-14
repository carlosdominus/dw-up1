
import React, { useEffect, useRef } from 'react';

const PaytButton: React.FC = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;

    // Usamos um listener nativo para garantir que a flag seja setada 
    // antes que o script da PayT dispare o redirecionamento
    const handleCapture = () => {
      (window as any).isPaytRedirect = true;
      console.log("Checkout autorizado, ignorando back redirect");
    };

    el.addEventListener('mousedown', handleCapture);
    el.addEventListener('touchstart', handleCapture);
    
    return () => {
      el.removeEventListener('mousedown', handleCapture);
      el.removeEventListener('touchstart', handleCapture);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <a 
        ref={linkRef}
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
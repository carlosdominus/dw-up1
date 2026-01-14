
import React, { useEffect } from 'react';
import DownsellPage from './components/DownsellPage';

const App: React.FC = () => {
  useEffect(() => {
    // Carrega o script da PayT dinamicamente para garantir que ele encontre os botões renderizados pelo React
    const script = document.createElement('script');
    script.src = "https://checkout.payt.com.br/multiple-oneclickbuyscript/RAZ2OE.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Opcional: remover o script se necessário, mas em LPs costuma-se manter
    };
  }, []);

  return (
    <div className="relative">
      <DownsellPage />
    </div>
  );
};

export default App;
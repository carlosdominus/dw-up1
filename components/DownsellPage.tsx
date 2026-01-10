
import React, { useState, useEffect } from 'react';
import { UPSELL_DATA } from '../constants';
import { ShieldCheckIcon, AlertTriangleIcon } from './Icons';

const DownsellPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Aviso de saída (PushState trick para back redirect)
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      alert("⚠️ ATENÇÃO! Se você sair agora, sua vaga de consulta individual será passada para o próximo homem da lista. Tem certeza?");
    };

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-green-100">
      {/* Top Banner de Urgência */}
      <div className="bg-red-600 text-white py-2 px-4 text-center sticky top-0 z-50 shadow-xl border-b border-red-700 overflow-hidden">
        <div className="animate-pulse flex items-center justify-center gap-2 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
          <span>🚨</span> VOCÊ FOI SELECIONADO! NÃO FECHE ESTA PÁGINA <span>🚨</span>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 pt-6 pb-20">
        {/* Título Principal */}
        <div className="text-center mb-6">
          <h1 className="flex flex-col items-center leading-none mb-4">
            <span className="text-2xl md:text-3xl font-black uppercase text-zinc-900 tracking-tight">
              {UPSELL_DATA.title}
            </span>
            <span className="text-4xl md:text-5xl font-black uppercase italic text-[#22a44a] tracking-tighter">
              {UPSELL_DATA.titleHighlight}
            </span>
          </h1>
          <p className="text-zinc-500 font-bold text-[10px] md:text-xs uppercase tracking-widest opacity-80">
            Acesso direto à Dra. Lara Silveira por 30 dias.
          </p>
        </div>

        {/* Pricing Box - No Topo para Conversão Rápida */}
        <div className="relative bg-white rounded-[2.5rem] border-4 border-zinc-100 p-8 md:p-10 mb-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] text-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-tighter shadow-lg animate-bounce">
            🔥 VAGA ÚNICAMENTE SUA HOJE
          </div>

          <div className="mt-4 mb-6">
            <p className="text-zinc-300 text-lg line-through font-black italic mb-1 opacity-60">Valor Anterior: {UPSELL_DATA.oldPrice}</p>
            <div className="flex justify-center items-center gap-1">
              <span className="text-2xl font-black text-zinc-400 mt-2">R$</span>
              <span className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-zinc-900">97<span className="text-3xl text-zinc-400">,00</span></span>
            </div>
            <p className="text-green-600 font-black text-[10px] uppercase mt-3 tracking-widest bg-green-50 inline-block px-4 py-1 rounded-full">
              Ou 12x de R$ 9,70
            </p>
          </div>

          <a 
            href={UPSELL_DATA.checkoutUrl}
            className="group relative block w-full bg-[#22a44a] hover:bg-green-500 text-white py-6 md:py-7 rounded-3xl text-xl md:text-2xl font-black uppercase tracking-tight transition-all active:scale-95 shadow-[0_15px_40px_rgba(34,164,74,0.4)] overflow-hidden animate-pulse-custom"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            QUERO MINHA CONSULTA AGORA
          </a>

          {/* Timer Compacto */}
          <div className="mt-6 flex flex-col items-center gap-1">
             <div className="flex gap-2 text-xl font-black font-mono text-zinc-900 px-4 py-1 rounded-xl">
               {formatTime(timeLeft)}
             </div>
             <p className="text-[9px] font-black text-red-600 uppercase tracking-widest italic">Sua vaga expira quando o tempo zerar</p>
          </div>
        </div>

        {/* Copy da Dra. Lara */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-xl font-black italic">Oi, aqui é a <span className="text-red-600">{UPSELL_DATA.instructor}!</span></h2>
          <div className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium max-w-xl mx-auto space-y-4 text-justify md:text-center">
            <p>Se esse vídeo apareceu na sua tela, significa que você é um homem de sorte. Antes de acessar seu Protocolo, tenho uma notícia muito especial.</p>
            
            <p>Hoje você foi escolhido como o <strong>homem da semana</strong> para algo completamente exclusivo: Por 30 dias, você terá acesso direto a mim por meio de um grupo privado no WhatsApp e uma consulta individual.</p>
            
            <p className="bg-zinc-50 p-6 rounded-3xl border-l-4 border-zinc-900 italic text-zinc-900 font-bold">
              "Acompanhamento pessoal direto comigo, onde eu ajudarei você a ajustar a dosagem e darei dicas que compartilho apenas com homens verdadeiramente comprometidos."
            </p>
            
            <p>Uma consulta individual comigo custa R$ 250 e minha agenda está sempre lotada. Mas, para você que já garantiu o protocolo, decidi oferecer essa chance excepcional por apenas <strong>noventa e sete reais</strong>.</p>
          </div>
        </div>

        {/* O que o usuário recebe */}
        <div className="mb-12">
          <h3 className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 italic">
            SEU PACOTE VIP INCLUI:
          </h3>
          <div className="grid gap-3">
            {UPSELL_DATA.benefitsList.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-3xl border border-zinc-100 transition-all hover:border-green-500/30 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] font-black text-green-600 uppercase tracking-widest italic">INCLUSO</span>
                    <span className="text-zinc-300 line-through text-[9px] font-bold italic">{item.price}</span>
                  </div>
                  <h4 className="font-black text-zinc-900 text-xs md:text-sm uppercase leading-tight">{item.title}</h4>
                  <p className="text-zinc-500 text-[9px] md:text-[10px] font-medium leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-zinc-900 text-white p-8 rounded-[2rem] mb-12 shadow-2xl relative overflow-hidden text-center">
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase mb-1 italic">30 Dias de Garantia</h4>
              <p className="text-zinc-400 text-[10px] md:text-xs font-medium leading-relaxed px-4">
                Se você sentir que meu acompanhamento não está acelerando seus resultados, devolverei seu dinheiro e passarei sua vaga para o próximo da fila.
              </p>
            </div>
          </div>
        </div>

        {/* Aviso Final de Escassez */}
        <div className="border-4 border-dashed border-red-600/20 p-8 rounded-[2rem] text-center mb-12">
          <div className="bg-red-600/10 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
             <AlertTriangleIcon className="w-5 h-5" />
          </div>
          <p className="text-zinc-500 text-[11px] font-bold leading-relaxed italic">
            Se você decidir recusar, não tem problema. Só quero que saiba que esta oportunidade <strong>nunca mais se repetirá</strong>. Sua vaga será imediatamente alocada ao próximo comprador.
          </p>
        </div>

        {/* CTA Final */}
        <a 
          href={UPSELL_DATA.checkoutUrl}
          className="block w-full bg-[#22a44a] text-white py-6 rounded-3xl text-center text-xl font-black uppercase tracking-tight shadow-xl hover:scale-[1.02] transition-transform active:scale-95 animate-pulse-custom"
        >
          SIM! QUERO MINHA CONSULTA INDIVIDUAL AGORA
        </a>

        <div className="mt-12 text-center opacity-40">
           <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-4">Acesso Seguro & Confidencial</p>
           <div className="flex justify-center gap-5 grayscale h-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
           </div>
        </div>
      </main>
    </div>
  );
};

export default DownsellPage;

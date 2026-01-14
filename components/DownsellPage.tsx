
import React, { useState, useEffect } from 'react';
import { UPSELL_DATA } from '../constants';
import { ShieldCheckIcon, AlertTriangleIcon } from './Icons';
import PaytButton from './PaytButton';

const DownsellPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      alert("⚠️ ESPERE! Sua vaga de consulta individual será perdida se sair agora. Tem certeza?");
    };

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Barra de Topo Minimalista */}
      <div className="bg-zinc-950 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-sm border-b border-white/5">
        <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase opacity-90">
          <span>ATENÇÃO:</span> SEU ACESSO VIP FOI PRÉ-APROVADO
        </div>
      </div>

      <main className="max-w-xl mx-auto px-6 pt-12 pb-24">
        {/* Cabeçalho Limpo */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Oportunidade Única
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter leading-[0.9] mb-4">
            {UPSELL_DATA.title}<br/>
            <span className="text-zinc-400 italic font-light">{UPSELL_DATA.titleHighlight}</span>
          </h1>
          <p className="text-zinc-500 font-medium text-sm md:text-base max-w-sm mx-auto">
            {UPSELL_DATA.subtitle}
          </p>
        </div>

        {/* Card de Preço Moderno */}
        <div className="bg-white rounded-[2.5rem] border border-zinc-100 p-8 md:p-12 mb-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
          
          <div className="mb-8">
            <p className="text-zinc-300 text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Invista hoje apenas</p>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-2xl font-black text-zinc-300">R$</span>
              <span className="text-8xl font-black tracking-tighter text-zinc-950">97</span>
              <span className="text-2xl font-bold text-zinc-400">,00</span>
            </div>
            <p className="text-zinc-400 text-xs mt-2 line-through font-medium">De {UPSELL_DATA.oldPrice}</p>
          </div>

          <PaytButton />

          <div className="mt-8 flex items-center justify-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">A oferta expira em:</span>
             </div>
             <div className="bg-zinc-50 px-4 py-1 rounded-full font-black text-zinc-900 tabular-nums border border-zinc-100">
               {formatTime(timeLeft)}
             </div>
          </div>
        </div>

        {/* Carta Dra. Lara - Estilo Editorial */}
        <article className="prose prose-zinc mx-auto mb-16 text-zinc-600 leading-relaxed font-medium">
          <h2 className="text-2xl font-black text-zinc-950 mb-6 italic">Uma mensagem rápida da <span className="underline decoration-zinc-200">Dra. Lara...</span></h2>
          <div className="space-y-6 text-base text-zinc-700">
            <p>Se você chegou até aqui, você faz parte de um grupo seleto de homens que buscam resultados reais.</p>
            <p>Decidi abrir algo que raramente faço: <strong>30 dias de acompanhamento direto</strong>. Isso significa que você não estará sozinho na jornada.</p>
            <blockquote className="border-l-4 border-zinc-950 pl-6 py-2 italic font-bold text-zinc-950 text-lg bg-zinc-50 rounded-r-2xl">
              "Eu vou pegar na sua mão para ajustar cada detalhe da sua dosagem e performance."
            </blockquote>
            <p>Uma consultoria exclusiva comigo não sai por menos de R$ 250. Mas hoje, como bônus de boas-vindas ao protocolo, você paga apenas o valor simbólico acima.</p>
          </div>
        </article>

        {/* Benefícios em Grid Clean */}
        <div className="grid gap-4 mb-16">
          <h3 className="text-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-4">Incluso no seu acesso</h3>
          {UPSELL_DATA.benefitsList.map((item, i) => (
            <div key={i} className="group flex items-center gap-5 p-5 bg-white border border-zinc-100 rounded-3xl transition-all hover:bg-zinc-50 hover:shadow-sm">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-black text-zinc-950 text-sm uppercase tracking-tight">{item.title}</h4>
                  <span className="text-[9px] font-black text-zinc-300 line-through italic">{item.price}</span>
                </div>
                <p className="text-zinc-500 text-xs leading-tight font-medium opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia Premium */}
        <div className="bg-zinc-950 text-white p-10 rounded-[2.5rem] mb-16 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Sua Satisfação é<br/>nossa prioridade</h4>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">
              Teste meu acompanhamento por 30 dias. Se não for exatamente o que você esperava, devolvemos seu dinheiro imediatamente.
            </p>
          </div>
        </div>

        {/* CTA de Encerramento */}
        <div className="text-center">
          <PaytButton />
          <p className="mt-8 text-[10px] text-zinc-400 font-black uppercase tracking-[0.5em] opacity-40">Seguro • Discreto • Vitalício</p>
        </div>
      </main>
    </div>
  );
};

export default DownsellPage;
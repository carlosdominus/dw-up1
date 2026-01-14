
import React from 'react';
import { PageData } from '../types';
import { CheckIcon, ShieldCheckIcon, GiftIcon } from './Icons';
import PaytButton from './PaytButton';

interface Props {
  data: PageData;
}

const VariationDark: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-100 selection:text-black">
      <div className="bg-white text-black py-3 px-4 text-center text-[9px] font-black tracking-[0.4em] uppercase">
        ⚡ OFERTA VIP - ACESSO IMEDIATO LIBERADO
      </div>

      <div className="max-w-xl mx-auto px-8 py-20 flex flex-col items-center">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
            {data.title}
          </h1>
          <p className="text-zinc-500 text-lg font-medium max-w-sm mx-auto">
            {data.subtitle}
          </p>
        </header>

        <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-10 md:p-14 mb-16 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,1)]">
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs mb-4 opacity-50">Investimento Único</p>
          <div className="text-7xl md:text-8xl font-black text-white mb-10 tracking-tighter">
            <span className="text-zinc-700 text-2xl mr-2">R$</span>97<span className="text-zinc-700 text-2xl ml-1">,00</span>
          </div>
          
          <PaytButton />
          
          <p className="mt-8 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
             Vaga Garantida por 10 Minutos
          </p>
        </div>

        <div className="w-full space-y-4 mb-16">
          {data.bonusList.slice(0, 3).map((bonus, i) => (
            <div key={i} className="flex justify-between items-center bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
                   <GiftIcon className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest block mb-1">INCLUSO</span>
                  <p className="text-white font-black text-sm uppercase tracking-tight">{bonus.title}</p>
                </div>
              </div>
              <div className="text-zinc-600 line-through font-bold text-xs italic">
                {bonus.price}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-zinc-900/30 border border-zinc-800/50 rounded-[2.5rem] p-10 flex flex-col items-center text-center">
          <ShieldCheckIcon className="w-12 h-12 text-zinc-600 mb-6" />
          <h4 className="text-xl font-black uppercase text-white mb-3 tracking-tighter">Garantia Blindada</h4>
          <p className="text-zinc-500 text-sm font-medium leading-relaxed">
            Sua satisfação ou cada centavo de volta. Sem perguntas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VariationDark;
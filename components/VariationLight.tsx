
import React from 'react';
import { PageData } from '../types';
import { CheckIcon, ShieldCheckIcon, GiftIcon } from './Icons';
import PaytButton from './PaytButton';

interface Props {
  data: PageData;
}

const VariationLight: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <div className="bg-zinc-950 text-white py-3 text-center text-[9px] font-black tracking-[0.4em] uppercase">
        Oferta de Contingência Ativada • Disponibilidade Limitada
      </div>

      <div className="max-w-xl mx-auto px-8 pt-16 pb-24">
        <div className="text-center mb-16">
          <span className="inline-block bg-zinc-100 text-zinc-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            Última Oportunidade
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-zinc-950 mb-6 tracking-tighter leading-[0.85]">
            Não saia de<br/><span className="text-zinc-300 italic">mãos vazias.</span>
          </h1>
          <p className="text-zinc-500 font-medium text-lg leading-relaxed max-w-sm mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-10 border border-zinc-100 mb-16 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] text-center">
          <div className="mb-10">
            <span className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Condição Especial Hoje</span>
            <div className="flex items-center justify-center gap-3">
               <span className="text-2xl font-black text-zinc-200 line-through decoration-zinc-300">{data.oldPrice}</span>
               <span className="text-7xl font-black text-zinc-950 tracking-tighter">{data.newPrice}</span>
            </div>
          </div>
          
          <PaytButton />
          
          <p className="mt-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            Acesso imediato enviado para o seu e-mail
          </p>
        </div>

        <div className="space-y-4 mb-16">
          <h3 className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em] mb-8 text-center italic">Bônus Exclusivos Inclusos</h3>
          {data.bonusList.map((bonus, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-zinc-50/50 border border-zinc-100 rounded-3xl">
              <div className="flex items-center gap-5">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <GiftIcon className="w-5 h-5 text-zinc-950" />
                </div>
                <span className="font-black text-zinc-900 uppercase text-xs tracking-tight">{bonus.title}</span>
              </div>
              <span className="text-zinc-300 text-[10px] font-black italic">{bonus.price}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-100 pt-16 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-8">
            <ShieldCheckIcon className="w-10 h-10 text-zinc-200" />
          </div>
          <h4 className="text-xl font-black text-zinc-950 mb-3 tracking-tighter uppercase">Garantia Incondicional</h4>
          <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xs">
            Teste por {data.guaranteeDays} dias. Resultados garantidos ou seu investimento de volta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VariationLight;
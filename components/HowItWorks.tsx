const steps = [
  { num: '1', label: 'ASSINE O PLANO' },
  { num: '2', label: 'ENVIE SUA RECEITA' },
  { num: '3', label: 'ESCOLHA SUA ARMAÇÃO' },
  { num: '4', label: 'RECEBA EM CASA' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#0c1a2e] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Como Funciona</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map(({ num, label }) => (
            <div key={num} className="border border-blue-500/40 rounded-xl p-6 text-center bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-5xl font-black text-blue-400 mb-3 leading-none">{num}</div>
              <p className="text-white font-bold text-xs tracking-widest uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

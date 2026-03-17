const steps = [
  { num: 1, label: 'ASSINE O PLANO' },
  { num: 2, label: 'ENVIE SUA RECEITA' },
  { num: 3, label: 'ESCOLHA SUA ARMAÇÃO' },
  { num: 4, label: 'RECEBA EM CASA' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#0d1f3c] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Como Funciona</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map(({ num, label }) => (
            <div key={num} className="border border-blue-500/40 rounded-xl p-6 text-center bg-white/5">
              <div className="text-5xl font-bold text-blue-400 mb-3">{num}</div>
              <p className="text-white font-semibold text-sm tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

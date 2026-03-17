const testimonials = [
  {
    name: 'Lucas M.',
    text: 'Incrível, meus olhos não ardem mais!',
    initials: 'LM',
    color: 'bg-blue-600',
  },
  {
    name: 'Ana C.',
    text: 'Melhor custo-benefício, vale muito a pena.',
    initials: 'AC',
    color: 'bg-indigo-600',
  },
  {
    name: 'Felipe S.',
    text: 'Quebrei meus óculos e troquei fácil.',
    initials: 'FS',
    color: 'bg-blue-700',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          O que <span className="font-extrabold">nossos clientes</span> dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, text, initials, color }) => (
            <div key={name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              {/* Photo area */}
              <div className={`h-48 ${color} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
                  {initials}
                </div>
              </div>
              {/* Text */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm italic mb-3">"{text}"</p>
                <p className="font-semibold text-gray-800 text-sm">— {name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

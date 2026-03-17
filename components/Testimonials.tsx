const testimonials = [
  { name: 'Lucas M.', text: 'Incrível, meus olhos não ardem mais!', avatar: '👨' },
  { name: 'Ana C.', text: 'Melhor custo-benefício, vale muito a pena.', avatar: '👩' },
  { name: 'Felipe S.', text: 'Quebrei meus óculos e troquei fácil.', avatar: '👨‍💼' },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          O que <strong>nossos clientes</strong> dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map(({ name, text, avatar }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4 text-center">{avatar}</div>
              <p className="text-gray-600 italic text-center mb-4">"{text}"</p>
              <p className="text-center font-semibold text-gray-800">— {name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

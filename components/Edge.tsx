export default function Edge() {
  return (
    <section id="edge" className="py-20 text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        The <span className="text-blue-600">Accredian Edge</span>
      </h2>

      {/* SUBTITLE */}
      <p className="text-gray-600 mb-12">
        Key Aspects of Our Strategic Training
      </p>

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src="/edge.png"
          alt="Accredian Edge Diagram"
          className="w-full max-w-4xl object-contain"
        />
      </div>

    </section>
  );
}
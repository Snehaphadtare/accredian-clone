export default function Hero() {
  return (
    <section id="home" className="bg-gray-100 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT */}
      <div className="max-w-xl">

  {/* HEADING */}
  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
  Next-Gen{" "}
  <span className="text-blue-600">Expertise</span> <br />
  For Your{" "}
  <span className="text-blue-600">Enterprise</span>
</h1>

  {/* SUBTEXT */}
  <p className="text-gray-600 text-lg mb-6">
    Cultivate high-performance teams through expert learning.
  </p>

  {/* BULLETS */}
  <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-700">

    <div className="flex items-center gap-2">
      <span className="text-green-500 text-lg">✔</span>
      <span>Tailored Solutions</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-green-500 text-lg">✔</span>
      <span>Industry Insights</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-green-500 text-lg">✔</span>
      <span>Expert Guidance</span>
    </div>

  </div>

  {/* BUTTON */}
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
    Enquire Now
  </button>

</div>

      {/* RIGHT */}
      <div className="mt-10 md:mt-0">
        <img
          src="/hero.png"
          alt="professionals"
          className="w-[450px] md:w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
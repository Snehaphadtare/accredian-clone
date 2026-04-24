export default function Hero() {
  return (
    <section className="bg-gray-100 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Next-Gen <span className="text-blue-600">Expertise</span> <br />
          For Your <span className="text-blue-600">Enterprise</span>
        </h1>

        <p className="text-gray-600 mb-6">
          Cultivate high-performance teams through expert learning.
        </p>

        {/* BULLETS */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-700">
          <span>✔ Tailored Solutions</span>
          <span>✔ Industry Insights</span>
          <span>✔ Expert Guidance</span>
        </div>

        {/* BUTTON */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Enquire Now
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-10 md:mt-0">
        <img
          src="/hero.png"
          alt="professionals"
          className="w-[400px]"
        />
      </div>
    </section>
  );
}
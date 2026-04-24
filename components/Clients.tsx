export default function Clients() {
  const logos = [
    "reliance",
    "hcl",
    "ibm",
    "tcs",
    "adp",
    "bayer",
  ];

  return (
    <section id="clients" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
  Our Proven <span className="text-blue-600">Partnerships</span>
</h2>

      <p className="text-gray-600 mb-10">
        Successful collaborations with industry leaders
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`/logos/${logo}.png`}
            alt={logo}
            className="h-10 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
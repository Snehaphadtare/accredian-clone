export default function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="py-20 text-center">
      
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Our <span className="text-blue-600">Track Record</span>
      </h2>

      <p className="text-gray-600 mb-12">
        The Numbers Behind Our Success
      </p>

      {/* STATS */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {stats.map((item, index) => (
          <div key={index} className="flex-1 relative">

            {/* Divider */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-gray-300"></div>
            )}

            {/* Number */}
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-xl font-semibold mb-4">
              {item.number}
            </div>

            {/* Label */}
            <p className="text-gray-700 text-sm max-w-xs mx-auto">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "HR Manager, TCS",
      feedback:
        "Accredian helped our team upskill efficiently with real-world programs.",
    },
    {
      name: "Priya Mehta",
      role: "L&D Lead, Infosys",
      feedback:
        "The training programs were practical and highly impactful for our workforce.",
    },
    {
      name: "Amit Verma",
      role: "Manager, HCL",
      feedback:
        "Great experience with expert mentors and structured learning paths.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 text-center">
      
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        What Our <span className="text-blue-600">Clients Say</span>
      </h2>

      <p className="text-gray-600 mb-12">
        Hear from enterprises that transformed their teams
      </p>

      {/* TESTIMONIAL CARDS */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border text-left"
          >
            <p className="text-gray-600 mb-4 text-sm">
              “{item.feedback}”
            </p>

            <h3 className="font-semibold text-gray-900">
              {item.name}
            </h3>

            <p className="text-xs text-gray-500">
              {item.role}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
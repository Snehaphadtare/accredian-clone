export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-blue-600">
        Accredian
      </h1>

      {/* LINKS */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <li><a href="#home">Home</a></li>
<li><a href="#stats">Stats</a></li>
<li><a href="#clients">Clients</a></li>
<li><a href="#edge">Accredian Edge</a></li>
<li><a href="#testimonials">Testimonials</a></li>
      </ul>

      {/* CTA BUTTON */}
       <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Contact
      </a>

    </nav>
  );
}
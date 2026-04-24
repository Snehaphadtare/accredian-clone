export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Accredian</h1>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
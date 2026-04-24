"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Accredian
          </h2>
          <p className="text-sm">
            Empowering enterprises through strategic learning and upskilling solutions.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Enterprise Training</li>
            <li className="hover:text-white cursor-pointer">Upskilling Programs</li>
            <li className="hover:text-white cursor-pointer">Certifications</li>
          </ul>
        </div>

        {/* CONTACT INFO + FORM */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm mb-4">
            <li>Email: hello@accredian.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Mumbai, India</li>
          </ul>

          {/* FORM */}
          <form
            className="flex flex-col gap-3"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              const formData = {
                name: (e.target as any).name.value,
                email: (e.target as any).email.value,
              };

              const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
              });

              const data = await res.json();
              alert(data.message);

              setLoading(false);
            }}
          >

            {/* NAME */}
<div className="flex flex-col text-left">
  <label className="text-sm text-white mb-1">Name</label>
  <input
    name="name"
    placeholder="Enter your name"
    className="p-2 rounded bg-transparent text-white placeholder:text-gray-400 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

{/* EMAIL */}
<div className="flex flex-col text-left">
  <label className="text-sm text-white mb-1">Email</label>
  <input
    name="email"
    placeholder="Enter your email"
    className="p-2 rounded bg-transparent text-white placeholder:text-gray-400 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

            {/* BUTTON */}
            <button
              className="bg-blue-600 text-white py-2 rounded mt-2"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Accredian. All rights reserved.
      </div>
    </section>
  );
}
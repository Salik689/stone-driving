import React from "react";
import ContactForm from "@/app/components/ContactForm";

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="bg-orange-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Have questions or want to book a lesson? Send us a message and we’ll get back to you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">Contact Us</h2>
          <ContactForm />
        </div>
      </section>

    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>

      <div className="flex justify-center gap-8">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1CJ1Vr851c/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 
            3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.3 
            0-1.7.8-1.7 1.6V12H16l-.4 3h-2.3v7A10 
            10 0 0022 12z" />
          </svg>
          Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/stonedrivingschool?utm_source=qr&igsh=MXhvcXVuMTBwZDB2cg=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 
            2.2 5 5 5h10c2.8 0 5-2.2 
            5-5V7c0-2.8-2.2-5-5-5H7zm0 
            2h10c1.7 0 3 1.3 
            3 3v10c0 1.7-1.3 3-3 
            3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
            1.3-3 3-3zm5 3.5A4.5 4.5 
            0 1012 17a4.5 4.5 0 
            000-9zm0 2A2.5 2.5 0 
            1112 15a2.5 2.5 0 
            010-5zm4.8-2.3a1.1 1.1 
            0 100 2.2 1.1 1.1 
            0 000-2.2z"/>
          </svg>
          Instagram
        </a>

      </div>
    </section>

    </main>
  );
};

export default page;

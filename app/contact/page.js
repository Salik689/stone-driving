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
    </main>
  );
};

export default page;

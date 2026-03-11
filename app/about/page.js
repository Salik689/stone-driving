import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About The In Stone Driving School",
  description: "Learn to drive with confidence at Stone Driving School. Expert instructors, flexible scheduling, and a high pass rate.",
};

const page = () => {
    return (
        <>
        <main className="min-h-screen bg-gray-50 text-gray-800">

            {/* Hero */}
            <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Stone Driving School
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
                        Helping learners become confident, safe, and independent drivers with
                        friendly and professional instruction.
                    </p>
                </div>
            </section>

            <div className="flex justify-center  md:justify-center mt-8">
                <Image
                    src="/image/owner1.png" // put your image in /public folder
                    alt="Owner of Stone Driving School"
                    className="w-40 h-45 md:w-37 md:h-45 sm:w-37 object-cover rounded- shadow-lg border-4 border-orange-600"
                    width={100}
                    height={100}
                />
            </div>

            {/* About content */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        Driving lessons you can trust
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Stone Driving School is built around one simple idea – making learning
                        to drive clear, calm, and enjoyable. We focus on building real confidence
                        behind the wheel, not just passing a test.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Whether you are a complete beginner or want to brush up your skills,
                        our lessons are designed to suit your pace and learning style.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6">Why choose us?</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold">✓</span>
                            Patient and friendly instructors
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold">✓</span>
                            Clear step-by-step teaching
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold">✓</span>
                            Lessons built around your confidence
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold">✓</span>
                            Focus on safe, real-world driving
                        </li>
                    </ul>
                </div>
            </section>




            {/* Mission */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our goal is to help every student feel confident and in control on the road.
                        We believe learning to drive should be stress-free, supportive, and built
                        on real skills that last for life.
                    </p>
                </div>
            </section>
        </main>
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-3xl font-bold text-gray-900 mb-3">
      Follow Stone Driving School
    </h2>

    <p className="text-gray-500 mb-8">
      Stay updated with tips, lessons, and student success stories.
    </p>

    <div className="flex justify-center gap-6">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1CJ1Vr851c/"
        target="_blank"
        className="group w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12A10 10 0 1 0 10.2 21.9v-7h-2.4v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.6.8-1.6 1.5v1.9h2.7l-.4 2.9H13v7A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/stonedrivingschool"
        target="_blank"
        className="group w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700 group-hover:text-pink-500 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5.5A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.5zm6-1.75a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 5.75z"/>
        </svg>
      </a>

    </div>

  </div>
</section>
        </>
    );
};

export default page;

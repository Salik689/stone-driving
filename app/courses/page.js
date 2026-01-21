"use client";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      name: "Beginner Driving",
      price: "£100",
      description: "Perfect for first-time drivers. Covers basics and confidence building.",
      features: ["Manual & Automatic", "Certified Instructors", "Flexible Timing"],
    },
    {
      name: "Theory Test Prep",
      price: "£20",
      description: "Everything you need to pass your theory test first time.",
      features: ["Mock Tests", "Road Signs", "Hazard Perception"],
    },
    {
      name: "Advanced Driving",
      price: "£150",
      description: "For experienced drivers looking to improve skills and safety.",
      features: ["Motorway Driving", "Night Driving", "Eco Driving"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
          Driving School Courses
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Learn to drive safely and confidently with our professional instructors.
        </p>
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
          >
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
              <p className="text-gray-500 mb-4">{course.description}</p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-orange-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t flex items-center justify-between">
              <span className="text-3xl font-extrabold text-orange-500">
                {course.price}
              </span>
              <Link href="/contact">
                <button className="bg-gray-800 text-orange-500 px-5 py-2 rounded-full font-semibold hover:bg-gray-900 transition">
                  Enrol
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-white">
          Ready to Start Driving?
        </h2>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto">
          Contact us today and book your first lesson with confidence.
        </p>

        <Link href="/contact">
          <button className="mt-6 bg-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-orange-400 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}

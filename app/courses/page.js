"use client";
import Link from "next/link";

export default function Courses() {
  const courses = [
    { name: "Driving Course", price: "£100", description: "Practical driving lessons" },
    { name: "Theory Course", price: "£20", description: "Learn the rules of the road" },
    { name: "Advanced Driving", price: "£150", description: "For experienced drivers" },
  ];

  const videos = [
    { title: "Driving Tips", url: "https://www.youtube.com/embed/1gkF9hQ9J2E" },
    { title: "Theory Practice", url: "https://www.youtube.com/embed/2xZ5Rz4CkxU" },
    { title: "Advanced Techniques", url: "https://www.youtube.com/embed/3kljvR0abc0" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">Our Courses</h1>
        <p className="mt-4 text-gray-600">Choose a course and learn at your pace</p>
      </header>

      {/* Pricing Table */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-500 mb-4">{course.description}</p>
            <p className="text-3xl font-bold text-orange-500">{course.price}</p>
          </div>
        ))}
      </section>

      {/* Learn More Videos */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Learn More</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.title} className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64 md:h-48"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Button */}
      <section className="text-center py-12">
        <Link href="/contact">
          <button className="bg-gray-800 text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

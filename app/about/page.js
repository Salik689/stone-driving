import React from "react";
import Image from "next/image";

const page = () => {
    return (
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
    );
};

export default page;

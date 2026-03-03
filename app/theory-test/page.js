import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
           <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">

  {/* Title */}
  <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-center text-black leading-tight">
      What happens during the Theory Test
  </h1>

  {/* Theory Info Section */}
  <section className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200">
      <p className="text-lg text-gray-700 leading-relaxed">
          The multiple-choice questions in the UK driving theory test cover 3 main sources:
      </p>

      <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 leading-relaxed ml-4">
          <li>The Highway Code</li>
          <li>Know Your Traffic Signs</li>
          <li>Driving: The Essential Skills</li>
      </ul>

      {/* Hazard Perception */}
      <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-black">Hazard Perception</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
              You will watch 14 video clips showing everyday road situations. Each clip contains at least one developing hazard.  
              You must click as soon as you see a potential hazard. Scoring depends on how quickly you respond.
          </p>
      </div>

      {/* Multiple Choice Section */}
      <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-black">Multiple Choice Questions</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
              There are 50 questions, and you need at least 43 correct to pass. Questions are randomly selected and cover:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Rules of the road and road signs</li>
              <li>Safety and vehicle handling</li>
              <li>Environmental and hazard awareness</li>
              <li>Driver responsibilities and laws</li>
          </ul>
      </div>

      {/* Tips */}
      <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-black">Tips for Passing</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Read questions carefully and check all options before answering</li>
                <li>Use the process of elimination to narrow down choices</li>
              <li>Stay calm and manage your time; you have 57 minutes for 50 multiple-choice questions</li>
          </ul>
      </div>

      {/* Scoring */}
      <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-black">Scoring</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
              The multiple-choice section is scored out of 50, and the hazard perception section is scored out of 75.  
              You must pass both parts to pass the theory test.
          </p>
      </div>
  </section>
</div>
            {/* Stone Driving School App Section */}
            <section className="bg-orange-50 p-8 rounded-2xl shadow-lg space-y-10 border border-orange-200">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-900 leading-snug text-center">
                    Get the Learn to Drive Pro App – FREE with Stone Driving School
                </h2>

                {/* App + Pricing Ticket */}
                <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300 flex flex-col md:flex-row gap-8 items-center justify-center">

                    {/* App Info */}
                    <div className="flex-1 text-center space-y-4">
                        <h3 className="font-bold text-xl text-black">Learn to Drive Pro App</h3>
                        <Image
                            src="/image/ADI-app-logo.avif"
                            alt="Learn to Drive Pro App Logo"
                            width={200}
                            height={100}
                            className="mx-auto rounded-lg shadow-md border border-gray-200"
                        />
                        <Image
                            src="/image/ADI-app-bg.webp"
                            alt="Learn to Drive Pro App Screenshot"
                            width={300}
                            height={150}
                            className="mx-auto rounded-lg shadow-md border border-gray-200"
                        />

                    </div>

                    {/* Ticket Style Price */}
                    <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 border border-orange-600 rounded-xl shadow-xl p-6 text-center w-64 overflow-hidden">
                        {/* Perforation circles */}
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full"></div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full"></div>

                        {/* Price */}
                        <p className="text-lg text-gray-100 line-through mb-2">£4.99</p>
                        <p className="text-2xl font-extrabold text-white">100% free when you join Stone Driving School</p>
                        <p className="mt-2 text-sm text-gray-100/80">Normally paid app</p>
                    </div>

                </div>

                {/* Key Features */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-gray-800 text-lg">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">Hazard Perception</div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">Theory Test</div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">Instructional Videos</div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition">And Much More</div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <Image
                            src="/image/ADI-app.webp"
                            alt="Learn to Drive Pro App Screenshot"
                            width={400}
                            height={200}
                            className="rounded-xl shadow-md border border-gray-200"
                        />
                    </div>
                </div>

            </section>
        </main>
    );
};

export default page;
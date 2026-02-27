"use client";

import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import Title from './components/Title'
const Page = () => {
  return (
    <>
    <main className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
  {/* Background image */}
  <div className="hero-bg hero-bg-mobile "></div>
  {/* Overlay for subtle dark effect */}
  <div className="absolute inset-0 bg-black/30"></div>

 
  {/* Hero content */}
  <div className="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-2xl space-y-4">
    <Title/>
    <p className="text-lg sm:text-xl text-white/90">
      Learn smart, pass your test faster, and enjoy the journey behind the wheel.
    </p>
    <div className="mt-6">
      <Link href="/contact">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  </div>
</main>

      <section className="py-12 bg-gray-50" id="whyUs">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <article className="bg-white rounded-[10px] shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl text-orange-500 font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn with fully qualified and patient instructors who guide you at your own pace and help you build confidence behind the wheel.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-[10px] shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl text-orange-500 font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your school, college, or work schedule so you can take lessons when it suits you best.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-[10px] shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl text-orange-500 font-semibold mb-3">High Pass Rate</h3>
              <p className="text-gray-600">
                Our students consistently pass their driving tests on the first attempt thanks to structured lessons and proven techniques.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-[10px] shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl text-orange-500 font-semibold mb-3">Modern & Safe Cars</h3>
              <p className="text-gray-600">
                Learn in dual-control, fully maintained vehicles equipped for safety and comfort, giving you the confidence to master the road.
              </p>
            </article>

          </div>
        </div>
      </section>
      <section className="mx-7 mt-7 review">
        {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
        <Script src="https://elfsightcdn.com/platform.js" async></Script>
        <div className="elfsight-app-d463cab9-694d-44e6-979d-a3fe7d0971bc" data-elfsight-app-lazy></div>
      </section>

    </>
  )
}

export default Page

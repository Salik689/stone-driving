import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="bg-gray-900 text-gray-300 pt-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-orange-400 mb-3">
                            Stone Driving School
                            {/* <Image src="/image/logo.png" alt="Logo" width={100} height={50} /> */}
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Professional driving lessons designed to help you pass first time.
                            Friendly instructors, modern cars and flexible lesson times.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-orange-400 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-orange-400 transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="hover:text-orange-400 transition">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-orange-400 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <p className="text-sm">📍 Huddersfield HD3</p>
                         <p className="text-sm mt-2">
                            <Link className='btn sms'
                                href={`sms:+447739091738`}>💬 SMS</Link>
                        </p>
                        <p className="text-sm mt-2">✉ StoneDrivingSchool@gmail.com</p>
                    </div>
{/* 07739091738 */}
                </div>
                  {/* Social Links */}
        <div className="flex justify-center items-center mt-2 gap-6 mb-1">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1CJ1Vr851c/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 
              3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.3 
              0-1.7.8-1.7 1.6V12H16l-.4 3h-2.3v7A10 
              10 0 0022 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/stonedrivingschool?utm_source=qr&igsh=MXhvcXVuMTBwZDB2cg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
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
          </a>

        </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                    © {year} Stone Driving School. All rights reserved.
                </div>
                
            </footer>
        </>
    );
};

export default Footer;

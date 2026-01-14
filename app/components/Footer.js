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
                            📞{" "}
                            <a
                                href="tel:07739 091738"
                                className="hover:text-orange-400 transition"
                            >
                                077390 91738
                            </a>
                        </p>

                        <p className="text-sm mt-2">✉ info@stonedrivingschool.co.uk</p>
                    </div>

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

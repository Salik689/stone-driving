"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="mr-1 relative inline-block text-left" ref={dropdownRef}>
            {/* Main Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full max-w-xs sm:max-w-[180px] items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
            >
                Resources
                <span className={`ml-3 transition-transform ${open ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="
                    absolute top-full mt-2 
                    left-0 sm:left-0 md:right-0 md:left-auto
                    w-max min-w-[200px] max-w-[350px]
                    rounded-lg border border-gray-200 bg-white shadow-lg z-50
                    break-words
                ">
                    <ul className="pr-2.5 flex flex-col py-2 text-sm sm:text-base text-gray-700">
                        {/* Practical Test */}
                        <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
                            <Link href="/practical-test-practice">Practical Test</Link>
                        </li>
                        <li className="pl-8 py-1 hover:bg-gray-50">
                            <Link href="/show-me-tell-me">Show me, Tell me</Link>
                        </li>
                        <li className="pl-8 py-1 hover:bg-gray-50">
                            <Link href="/videos">Videos</Link>
                        </li>

                        {/* Theory Test Practice */}
                        <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
                            <Link href="/theory-test-practice">Theory Test Practice</Link>
                        </li>
                        <li className="pl-8 py-1 hover:bg-gray-50">
                            <Link href="/multiple-choice">Multiple Choice Questions</Link>
                        </li>
                        <li className="pl-8 py-1 hover:bg-gray-50">
                            <Link href="/hazard-perception">Hazard Perception Videos</Link>
                        </li>

                        {/* Other */}
                        <li className="px-4 py-2 hover:bg-gray-100 font-semibold">
                            <Link href="/other-resources">Other</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

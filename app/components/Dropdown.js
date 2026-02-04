"use client";
import { useState, useRef, useEffect } from "react";

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
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-40 items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Resourses
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul className="flex flex-col py-1 text-sm text-gray-700">
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Show me. Tell me.
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Videos
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Other
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

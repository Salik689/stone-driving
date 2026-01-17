import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gray-900 text-gray-100">
      
      {/* 404 Heading with orange glow */}
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]">
        404 Not Found
      </h1>

      {/* Divider */}
      <div className="h-px w-80 rounded bg-gradient-to-r from-gray-500 to-gray-700 my-5 md:my-7"></div>

      {/* Message */}
      <p className="md:text-xl text-gray-400 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <a
        href="/"
        className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-full mt-10 font-medium text-white active:scale-95 transition-all shadow-md shadow-orange-400/50"
      >
        Back to Home
        <svg
          className="group-hover:translate-x-1 transition-transform"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default NotFoundPage;

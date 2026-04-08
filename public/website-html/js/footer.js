// Get footer element
const footer = document.getElementsByClassName('footer')[0];

// Get current year
const year = new Date().getFullYear();

// Inject footer HTML
footer.innerHTML = `
<footer class="bg-gray-900 text-gray-300 pt-12">

  <!-- Main Grid -->
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

    <!-- ================= Brand ================= -->
    <div>
      <h3 class="text-2xl font-bold text-orange-400 mb-3">
        Stone Driving School
      </h3>
      <p class="text-sm leading-relaxed">
        Professional driving lessons designed to help you pass first time.
        Friendly instructors, modern cars and flexible lesson times.
      </p>
    </div>

    <!-- ================= Quick Links ================= -->
    <div>
      <h4 class="text-lg font-semibold text-white mb-4">
        Quick Links
      </h4>

      <ul class="space-y-2 text-sm">
        <li><a href="/" class="hover:text-orange-400">Home</a></li>
        <li><a href="/about" class="hover:text-orange-400">About</a></li>
        <li><a href="/courses" class="hover:text-orange-400">Courses</a></li>
        <li><a href="/contact" class="hover:text-orange-400">Contact</a></li>
      </ul>
    </div>

    <!-- ================= Contact ================= -->
    <div>
      <h4 class="text-lg font-semibold text-white mb-4">
        Contact
      </h4>

      <p class="text-sm">📍 Huddersfield HD3</p>

      <p class="text-sm mt-2">
        <a href="sms:+447739091738" class="btn sms">💬 SMS</a>
      </p>

      <p class="text-sm mt-2">
        ✉ StoneDrivingSchool@gmail.com
      </p>
    </div>

  </div>

  <!-- ================= Social Links ================= -->
  <div class="flex justify-center items-center mt-4 gap-6">

    <!-- ===== Facebook Icon ===== -->
    <a href="https://www.facebook.com/share/1CJ1Vr851c/" target="_blank">

      <div class="group w-12 h-12 cursor-pointer">
        <svg viewBox="0 0 24 24" class="w-full h-full">

          <!-- Background -->
          <rect 
            width="24" 
            height="24" 
            rx="4"
            class="fill-blue-600 group-hover:fill-orange-500 transition-colors duration-300"
          />

          <!-- "f" Icon -->
          <path 
            d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.1l.4-3H13V9c0-.6.4-1 1-1z"
            class="fill-white"
          />

        </svg>
      </div>

    </a>

    <!-- ===== Instagram Icon ===== -->
    <a href="https://www.instagram.com/stonedrivingschool" target="_blank">

      <!-- (You only need Tailwind once in your whole site, not here ideally) -->
      <script src="https://cdn.tailwindcss.com"></script>

      <div class="group w-12 h-12 cursor-pointer">
        <svg viewBox="0 0 24 24" class="w-full h-full">

          <!-- Background -->
          <rect 
            width="24" 
            height="24" 
            rx="6"
            class="fill-pink-500 group-hover:fill-orange-500 transition-colors duration-300"
          />

          <!-- Camera Icon -->
          <path 
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
            class="fill-white"
          />

        </svg>
      </div>

    </a>

  </div>

  <!-- ================= Bottom Bar ================= -->
  <div class="mt-12 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
    © ${year} Stone Driving School. All rights reserved.
  </div>

</footer>
`;

// Debug log
console.log("Footer loaded");
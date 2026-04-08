// Insert navbar into page
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("navbar");

    header.innerHTML = `
  <header class="backdrop-blur-md bg-white/10 shadow-md flex justify-between items-center px-6 py-3 ">

    <div>
      <a href="index.html" class="text-xl font-bold"><img src="images/logos/logo.png" alt="Logo" class="h-10"></a>
    </div>

    <button id="menuBtn" class="text-3xl text-orange-500 md:hidden">☰</button>

    <!-- Desktop -->
    <nav class="hidden md:flex gap-6 font-medium items-center">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="courses.html">Courses</a>
      <a href="contact.html">Contact</a>

       <div class="dropdown-container">
            <details class="dropdown-wrapper">

              <summary class="dropdown-btn">
                Resources
                <!-- DownArrowSVG -->
                <span class="arrow">▼</span>
              </summary>

              <div class="dropdown-menu">
                <a href="/practical-test" class="dropdown-item">
                  Practical Test
                </a>

                <a href="/show-me-tell-me" class="dropdown-item">
                  Show me, tell me
                </a>

                <a href="/theory-test" class="dropdown-item">
                  Theory Test
                </a>
              </div>

            </details>
          </div>
    </nav>

    <!-- Mobile -->
    <nav id="mobileNav" class="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-300 md:hidden">
      <div class="p-4 text-right">
        <button id="closeBtn" class="text-2xl">✕</button>
      </div>

      <ul class="flex flex-col gap-4 p-6 bg-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Contact</a></li>
        <li>
               <div class="dropdown-container">
                <details class="dropdown-wrapper">

                <summary class="dropdown-btn">
                    Resources
                    <!-- DownArrowSVG -->
                    <span class="arrow">▼</span>
                </summary>

                <div class="dropdown-menu">
                    <a href="/practical-test" class="dropdown-item">
                    Practical Test
                    </a>

                    <a href="/show-me-tell-me" class="dropdown-item">
                    Show me, tell me
                    </a>

                    <a href="/theory-test" class="dropdown-item">
                  Theory Test
                </a>
              </div>

            </details>
          </div>
          </li>
      </ul>

 
    </nav>

  </header>

  <div id="overlay" class="fixed inset-0 bg-black/50 hidden"></div>
  `;

    // Now attach functionality AFTER it loads
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const mobileNav = document.getElementById("mobileNav");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
        mobileNav.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", () => {
        mobileNav.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    });

    // Close dropdowns when clicking outside
    document.addEventListener("mousedown", (e) => {
        document.querySelectorAll("details").forEach((d) => {
            if (!d.contains(e.target)) d.removeAttribute("open");
        });
    });
});

const titleContainer = document.getElementsByClassName("title")[0];

titleContainer.innerHTML = `
  <h1 id="hero-title"
    class="text-4xl sm:text-6xl md:text-6xl font-bold text-white/90 transition-transform duration-300">
    
    <!-- This is where the typing text will appear -->
    <span id="text"></span>

    <!-- Blinking cursor effect -->
    <span class="border-r-2 border-orange-500 animate-pulse ml-1"></span>
  
  </h1>`;

   // Wait until the page fully loads
  document.addEventListener("DOMContentLoaded", function () {

    // Full sentence we want to type out
    const fullText = "Accelerate Your Driving Journey";

    // Get elements from the page
    const textElement = document.getElementById("text");
    const title = document.getElementById("hero-title");

    // Counter to track how many letters are shown
    let i = 0;

    // Run every 100ms (typing speed)
    const interval = setInterval(() => {

      // Show part of the text (like typing effect)
      textElement.textContent = fullText.slice(0, i + 1);

      // Move to next letter
      i++;

      // When full text is displayed
      if (i === fullText.length) {
        clearInterval(interval); // Stop typing

        // Add highlight effect (zoom + brighter text)
        title.classList.add("scale-110", "text-white");

        // Remove highlight after 0.5 seconds
        setTimeout(() => {
          title.classList.remove("scale-110");
          title.classList.add("text-white/90");
        }, 500);
      }

    }, 100); // Adjust this to make typing faster/slower

  });
const fullText = 'Accelerate Your Driving Journey';
const heroTitle = document.getElementById('hero-title');
let index = 0;

function typeText() {
  heroTitle.textContent = fullText.slice(0, index + 1);
  index++;
  if (index <= fullText.length) {
    heroTitle.innerHTML = `${heroTitle.textContent}<span class="cursor"></span>`;
  }
  if (index >= fullText.length) {
    clearInterval(typeInterval);
    heroTitle.classList.add('highlight');
    setTimeout(() => heroTitle.classList.remove('highlight'), 500);
    heroTitle.innerHTML = fullText;
  }
}

const typeInterval = setInterval(typeText, 100);

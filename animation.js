// Get the canvas element and set up its context
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Function to create a particle
function createParticle(x, y) {
  return {
    x: x,
    y: y,
    size: Math.random() * 2 + 1, // Random size between 1 and 3
    speedX: Math.random() * 3 - 1.5, // Random horizontal speed
    speedY: Math.random() * 3 - 1.5, // Random vertical speed
    color: `rgba(0, 123, 255, ${Math.random()})` // Random semi-transparent blue color
  };
}

// Array to store all particles
let particles = [];

// Function to animate particles
function animateParticles() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Add new particles if the count is below the limit
  if (particles.length < 100) {
    particles.push(createParticle(canvas.width / 2, canvas.height / 2));
  }

  // Update and draw each particle
  particles.forEach((particle, index) => {
    // Move the particle
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Remove particles that go out of bounds
    if (
      particle.x < 0 ||
      particle.x > canvas.width ||
      particle.y < 0 ||
      particle.y > canvas.height
    ) {
      particles.splice(index, 1);
    }

    // Draw the particle as a circle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  });

  // Request the next animation frame
  requestAnimationFrame(animateParticles);
}

// Start the animation loop
animateParticles();

// Select the custom cursor element
const cursor = document.querySelector('.cursor');

// Function to update cursor position
function updateCursor(event) {
  const { clientX, clientY } = event;
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', updateCursor);

// Function to handle hover effects
function handleHover(event) {
  const target = event.target;
  if (target.tagName === 'A' || target.tagName === 'BUTTON') {
    cursor.classList.add('hover');
  } else {
    cursor.classList.remove('hover');
  }
}

// Add event listeners for hover effects
document.addEventListener('mouseover', handleHover);
document.addEventListener('mouseout', () => cursor.classList.remove('hover'));
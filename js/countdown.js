const countdown = document.querySelector('.countdown');

// Set Due Date
const dueDate = new Date('December, 5 2019 14:00:00').getTime();

// Update every second
const interval = setInterval(() => {
  // Get current data/time in milliseconds
  const now = new Date().getTime();
  
  // Difference between dueDate and now
  const diff = dueDate - now;
  
  // Time Calculations
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  // Display Result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;
  
  // Due Date has passed
  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = '';
  }
}, 1000);
// Get references to the hour, minute, and second elements
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

// Set the initial position of the clock hands
setClockHands();

// Update the clock hands every second
setInterval(() => {
  setClockHands();
}, 1000);

function setClockHands() {
  // Get the current date and time
  const now = new Date();
  
  // Calculate the hour, minute, and second angles
  const hourAngle = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
  const minuteAngle = now.getMinutes() * 6;
  const secondAngle = now.getSeconds() * 6;
  
  // Set the transform property of the clock hands to rotate them to the correct position
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
}
// Select the second hand element from the DOM
const secondHand = document.querySelector('.second-hand');

// Select the minute hand element from the DOM
const minsHand = document.querySelector('.min-hand');

// Select the hour hand element from the DOM
const hourHand = document.querySelector('.hour-hand');

// Function to update the clock hands based on the current time
function setDate() {
    const now = new Date(); // Get the current date and time

    const seconds = now.getSeconds(); // Get the current seconds
    const secondsDegrees = ((seconds / 60) * 360) + 90; // Calculate rotation for the second hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Rotate the second hand

    const mins = now.getMinutes(); // Get the current minutes
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90; // Calculate rotation for the minute hand
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // Rotate the minute hand

    const hour = now.getHours(); // Get the current hour
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90; // Calculate rotation for the hour hand
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Rotate the hour hand
}

// Call the setDate function every second to update the clock
setInterval(setDate, 1000);

// Initial call to set the clock hands immediately
setDate();

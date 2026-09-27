// Set the date for the countdown
const targetDate = new Date("November 2, 2026 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-section").classList.add("hidden");
        document.getElementById("gift-section").classList.remove("hidden");
    }
}, 1000);

// Transition from Gift to Message
document.getElementById("gift-box").addEventListener("click", function() {
    document.getElementById("gift-section").classList.add("hidden");
    document.getElementById("message-section").classList.remove("hidden");
});

// Transition from Message to Memories
document.getElementById("next-btn").addEventListener("click", function() {
    document.getElementById("message-section").classList.add("hidden");
    document.getElementById("memories-section").classList.remove("hidden");
});

// Transition from Memories to Final Message
document.getElementById("final-btn").addEventListener("click", function() {
    document.getElementById("memories-section").classList.add("hidden");
    document.getElementById("final-section").classList.remove("hidden");
});
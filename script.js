// Initialize and manage continuous music across all pages
window.addEventListener('load', function() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        // Get saved playback time from session storage
        const savedTime = sessionStorage.getItem('audioTime');
        
        if (savedTime) {
            // Resume from saved time
            audio.currentTime = parseFloat(savedTime);
        }
        
        // Try to play the audio
        audio.play().catch(function(error) {
            console.log('Autoplay prevented. Will play on user interaction.');
        });
        
        // Save current time every second so it continues from same point on page change
        setInterval(function() {
            if (audio && !audio.paused) {
                sessionStorage.setItem('audioTime', audio.currentTime);
            }
        }, 1000);
    }
});

// Play music on first user interaction if autoplay was blocked
document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio && audio.paused) {
        audio.play().catch(function(error) {
            console.log('Error playing audio:', error);
        });
    }
}, { once: true });

// Save audio time before navigation
function goToPage2() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        sessionStorage.setItem('audioTime', audio.currentTime);
    }
    window.location.href = "./page2.html";
}

function goToPage1() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        sessionStorage.setItem('audioTime', audio.currentTime);
    }
    window.location.href = "./index.html";
}

function showFinalMessage() {
    const popup = document.getElementById("finalPopup");
    popup.style.display = "flex";
}

/* Close popup when clicking outside popup-content */
window.addEventListener("click", function(event) {
    const popup = document.getElementById("finalPopup");
    const popupContent = document.querySelector(".popup-content");

    if (event.target === popup) {
        popup.style.display = "none";
    }
});

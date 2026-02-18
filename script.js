function goToPage2() {
    window.location.href = "./page2.html";
}

function goToPage1() {
    window.location.href = "./page1.html";
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

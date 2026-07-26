const button = document.querySelector(".surprise-btn");
const message = document.querySelector(".hidden-message");
const letter = document.querySelector(".letter");
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

button.addEventListener("click", function () {

    message.style.display = "block";
    letter.style.display = "block";

    confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 }
    });
    for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 150);
}

});
const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});
const gifts = document.querySelectorAll(".gift");
const giftMessage = document.querySelector(".gift-message");

gifts.forEach(function(gift) {

    gift.addEventListener("click", function() {

        gift.classList.add("open");

        giftMessage.textContent = gift.getAttribute("data-message");

        setTimeout(() => {
            gift.classList.remove("open");
        }, 600);

    });

});
const finalBtn = document.querySelector(".final-btn");
const finalMessage = document.querySelector(".final-message");

if (finalBtn && finalMessage) {
    finalBtn.addEventListener("click", function () {
        finalMessage.style.display = "block";
        finalBtn.style.display = "none";
    });
}
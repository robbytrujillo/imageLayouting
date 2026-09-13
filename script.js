// ================================
// CURRENT YEAR
// ================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ================================
// EXPLORE BUTTON
// ================================

const exploreButton = document.getElementById("exploreButton");

exploreButton.addEventListener("click", function () {
  const gallery = document.getElementById("gallery");

  gallery.scrollIntoView({
    behavior: "smooth",
  });
});

// ================================
// IMAGE LOADING EFFECT
// ================================

const images = document.querySelectorAll(".card-image img");

images.forEach(function (image) {
  image.addEventListener("load", function () {
    image.classList.add("loaded");
  });
});

// ================================
// CARD CLICK
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").textContent;

    console.log("Anda memilih:", title);
  });
});

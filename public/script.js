// 1. Hamburger menu toggle (for mobile)
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");   // show/hide the menu
});

// 2. Click a photo to see its name
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const name = card.querySelector("p").innerText;
    alert("You clicked: " + name);
  });
});
const hamburger = document.getElementById("hamburger");

const mobileMenu = document.getElementById("mobileMenu");

const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  console.log("click");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

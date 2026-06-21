const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const statusElement = document.querySelector("#shop-status");
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (statusElement) {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const closesAt = day === 0 ? 18 : 20;
  const opensAt = 9;
  const isOpen = hour >= opensAt && hour < closesAt;

  statusElement.textContent = isOpen ? "Open now" : "Closed now";
}

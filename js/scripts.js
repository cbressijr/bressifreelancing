/* Smooth scroll for buttons and nav */
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* Auto-update footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Contact form status message */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Submitting...";

  setTimeout(() => {
    status.textContent = "Your request has been sent!";
    form.reset();
  }, 800);
});

// Scroll to projects section
const btn = document.querySelector(".btn");
const projectsSection = document.querySelector("#projects");

btn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

// Contact form interaction
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message sent successfully! Thank you 😊");

  form.reset();
});

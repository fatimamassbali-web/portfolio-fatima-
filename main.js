// Scroll to projects section
const btn = document.querySelector("#btnProjects");
const projectsSection = document.querySelector("#projects");

btn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});


// Contact form interaction
const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message sent successfully! Thank you 😊");

  form.reset();
});
 const openButtons = document.querySelectorAll(".open");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Opening project...");
  });
});
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Check JS
console.log("JS is working");

// Smooth scroll to projects
const btn = document.getElementById("btnProjects");

btn.addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});

// Simple interaction (projects buttons)
const buttons = document.querySelectorAll(".open");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Project opened!");
  });
});
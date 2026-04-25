// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute("href"));
  
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Simple welcome message in console
  console.log("Welcome to Ashley Portfolio 🚀");
  
  // Optional: highlight navbar on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
  
    if (window.scrollY > 50) {
      navbar.style.background = "#0b1220";
    } else {
      navbar.style.background = "#1e293b";
    }
  });
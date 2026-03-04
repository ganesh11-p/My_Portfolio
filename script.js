
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

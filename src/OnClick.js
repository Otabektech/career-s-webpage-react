// console.log("hello world");

export const OnClick = document.addEventListener(
  "DOMContentLoaded",
  function (e) {
    const menuIcon = document.querySelector("#hamburger-icon");
    const closeIcon = document.querySelector("#close-icon");
    const mobileNav = document.querySelector(".mobile-nav");

    menuIcon.addEventListener("click", function () {
      mobileNav.classList.add("mobile-nav--show");
    });

    closeIcon.addEventListener("click", function () {
      mobileNav.classList.remove("mobile-nav--show");
    });

    ///////////////////////////////////////////////////////////
    // Set current year

    const yearEl = document.querySelector(".year");
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }
);

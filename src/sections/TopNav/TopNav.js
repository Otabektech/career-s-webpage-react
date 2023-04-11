import logo from "../../img/Logo.svg";
import downArrow from "../../img/icons/chevron-down.svg";
import Menu from "../../img/icons/icon-menu-1.svg";
import closeIcon from "../../img/icons/close-icon.svg";

const onClick = document.addEventListener("DOMContentLoaded", function (e) {
  const menuIcon = document.querySelector("#hamburger-icon");
  const closeIcon = document.querySelector("#close-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.add("mobile-nav--show");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav--show");
  });
});

export const TopNav = () => {
  return (
    <header classNameName="header" id="header-sticky">
      <div classNameName="container header-content">
        <img classNameName="logo" alt="Move logo" src={logo} />

        <nav classNameName="main-nav">
          <a classNameName="main-nav__link" href="#home">
            Home <img src={downArrow} alt="down-arrow" />
          </a>
          <a classNameName="main-nav__link" href="#pages">
            Pages <img src={downArrow} alt="down-arrow" />
          </a>
          <a classNameName="main-nav__link" href="#blog">
            Blog <img src={downArrow} alt="down-arrow" />
          </a>

          <a classNameName="main-nav__link" href="#Portfolio">
            Portfolio <img src={downArrow} alt="down-arrow" />
          </a>

          <button classNameName="get-started-btn btn-primary nav__cta-btn">
            Get Started
          </button>
        </nav>
        <img src={Menu} alt="Menu" id="hamburger-icon" />

        <nav className="mobile-nav">
          <div className="container">
            <div className="mobile-nav__header">
              <img src={logo} alt="Move" className="nav__logo" />
              <img src={closeIcon} alt="Close" id="close-icon" />
            </div>

            <ul className="mobile-nav__links">
              <li>
                <a className="mobile-nav__link" href="*home">
                  Home
                </a>
              </li>
              <li>
                <a className="mobile-nav__link" href="#pages">
                  Pages
                </a>
              </li>
              <li>
                <a className="mobile-nav__link" href="#blog">
                  Blog
                </a>
              </li>

              <li>
                <a className="mobile-nav__link" href="#Portfolio">
                  Portfolio
                </a>
              </li>

              <button
                className="get-started-btn btn-primary mobile-nav__cta"
                onClick={onClick}
              >
                Get Started
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

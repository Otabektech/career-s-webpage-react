import logo from "../img/Logo.svg";
import downArrow from "../img/icons/chevron-down.svg";
import Menu from "../img/icons/icon-menu-1.svg";
import closeIcon from "../img/icons/close-icon.svg";

export const TopNav = () => {
  return (
    <header className="header" id="header-sticky">
      <div className="container header-content">
        <img className="logo" alt="Move logo" src={logo} />

        <nav className="main-nav">
          <a className="main-nav__link" href="#home">
            Home <img src={downArrow} alt="down-arrow" />
          </a>
          <a className="main-nav__link" href="#pages">
            Pages <img src={downArrow} alt="down-arrow" />
          </a>
          <a className="main-nav__link" href="#blog">
            Blog <img src={downArrow} alt="down-arrow" />
          </a>

          <a className="main-nav__link" href="#Portfolio">
            Portfolio <img src={downArrow} alt="down-arrow" />
          </a>

          <button className="get-started-btn btn-primary nav__cta-btn">
            Get Started
          </button>
        </nav>
        <img src={Menu} alt="Menu" id="hamburger-icon" />

        <nav class="mobile-nav">
          <div class="container">
            <div class="mobile-nav__header">
              <img src={logo} alt="Move" class="nav__logo" />
              <img src={closeIcon} alt="Close" id="close-icon" />
            </div>

            <ul class="mobile-nav__links">
              <li>
                <a class="mobile-nav__link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a class="mobile-nav__link" href="#pages">
                  Pages
                </a>
              </li>
              <li>
                <a class="mobile-nav__link" href="#blog">
                  Blog
                </a>
              </li>

              <li>
                <a class="mobile-nav__link" href="#Portfolio">
                  Portfolio
                </a>
              </li>

              <button class="get-started-btn btn-primary mobile-nav__cta">
                Get Started
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

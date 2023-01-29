import logo from "../img/Logo.svg";
import basketball from "../img/icons/Dribble.svg";
import facebook from "../img/icons/Facebook.svg";
import twitter from "../img/icons/Twitter.svg";
import youtube from "../img/icons/YouTube.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-column">
            <img className="footer-logo" alt="Move logo" src={logo} />

            <p className="footer-logo-heading">
              Move - Multipurpose Design Template will help you develop your
              website design.
            </p>

            <div className="footer-smedia-logos">
              <a href="#">
                <img src={basketball} alt="basketball" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>

          <div className="nav-footer">
            <p className="footer-nav-heading">
              <strong>Home</strong>
            </p>
            <ul id="nav-footer-margin">
              <li>
                <a href="#" className="nav-footer-link">
                  Desktop App
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  SaaS
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Event
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Software
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-footer">
            <p className="footer-nav-heading">
              <strong>Pages</strong>
            </p>
            <ul>
              <li>
                <a href="#" className="nav-footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-footer">
            <p className="footer-nav-heading">
              <strong>Blog</strong>
            </p>
            <ul>
              <li>
                <a href="#" className="nav-footer-link">
                  Blog Listing
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Blog Article
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-footer">
            <p className="footer-nav-heading">
              <strong>Portfolio</strong>
            </p>
            <ul>
              <li>
                <a href="#" className="nav-footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="nav-footer-link">
                  Single Case
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright &copy; <span className="year">2019-2020</span> Move
            Multipurpose Design Template.
          </p>
        </div>
      </div>
    </footer>
  );
};

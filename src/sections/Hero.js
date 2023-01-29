import arrowRight from "../img/icons/arrow-right.svg";
import smallTeam from "../img/standing-man.png";
import playButton from "../img/icons/Button_Play.svg";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-section-content">
        <div className="hero-section-description">
          <h1 className="hero-section-heading">
            We are a small team that thinks big!
          </h1>
          <p className="hero-section-subheading">
            Have you been looking for a job for a long time where you will be
            welcome? Send your resume to work with us!
          </p>
          <a className="hero-section-cta" href="#">
            Find an opening
            <img src={arrowRight} alt="arrow right" />
          </a>
        </div>

        <div className="hero-section-img-wrapper">
          <img src={smallTeam} className="hero-section-img" alt="small team" />
          <img className="button-play" src={playButton} alt="play button" />
        </div>
      </div>
    </section>
  );
};

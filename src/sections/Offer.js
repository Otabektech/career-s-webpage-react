import socialPackage from "../img/icons/package.svg";
import workplace from "../img/icons/workplace.svg";
import freeMeals from "../img/icons/meals.svg";
import gameRoom from "../img/icons/game.svg";

export const Offer = () => {
  return (
    <section className="offer-section">
      <div className="container offer-section-content">
        <h2 className="offer-section-heading">What we offer</h2>
        <p className="offer-section-subheading">
          We offer you a huge number of advantages when applying for a job with
          us. Check out a few basic but important ones below.
        </p>

        <div className="offer-cards">
          <div className="offer-card">
            <img src={socialPackage} alt="social package" />
            <p className="offer-card-heading">Full social package</p>
            <p className="offer-card-subheading">
              Our company offers you a full social package when you apply for a
              job with us.
            </p>
          </div>

          <div className="offer-card">
            <img src={workplace} alt="Equipped workplace" />
            <p className="offer-card-heading">Equipped workplace</p>
            <p className="offer-card-subheading">
              We will equip your workplace at the expense of the company. You
              can order everything you need for your work.
            </p>
          </div>

          <div className="offer-card">
            <img src={freeMeals} alt="Free meals" />
            <p className="offer-card-heading">Free meals</p>
            <p className="offer-card-subheading">
              During breaks between work, you can eat in our cafe for free. You
              will have a huge selection of food available.
            </p>
          </div>

          <div className="offer-card">
            <img src={gameRoom} alt="Game room" />
            <p className="offer-card-heading">Game room</p>
            <p className="offer-card-subheading">
              If you are too tired you can distract yourself from thinking about
              working in the game room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

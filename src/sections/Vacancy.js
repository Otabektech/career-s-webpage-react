export const Vacancy = () => {
  return (
    <section className="vacancy-section">
      <div className="container vacancy-section-content">
        <h4 className="vacancy-section-heading">Free vacancy</h4>
        <p className="vacancy-section-subheading">
          Jobs that are available from us and looking for their own people!
          Browse our vacancies and find the one that is right for you!
        </p>
        <div className="vacancies">
          <div className="vacancy-categories">
            <p>
              <strong>Position</strong>
            </p>
            <p>
              <strong>Department</strong>
            </p>
            <p>
              <strong>Location</strong>
            </p>
          </div>

          <div className="vacancy">
            <p className="vacancy-positions">
              <strong>Motion Designer</strong>
            </p>
            <p className="vacancy-type">Design</p>
            <p className="vacancy-location">San Francisco</p>
          </div>

          <div className="vacancy">
            <p className="vacancy-positions">
              <strong>Art Director</strong>
            </p>
            <p className="vacancy-type">Design</p>
            <p className="vacancy-location">San Francisco</p>
          </div>

          <div className="vacancy">
            <p className="vacancy-positions">
              <strong>Customer Relations</strong>
            </p>
            <p className="vacancy-type">Support</p>
            <p className="vacancy-location">New York</p>
          </div>

          <div className="vacancy">
            <p className="vacancy-positions">
              <strong>React Developer</strong>
            </p>
            <p className="vacancy-type">Engineering</p>
            <p className="vacancy-location">San Francisco</p>
          </div>
        </div>

        <div className="btn-vacancy">
          <button className="btn-resume btn-secondary">
            Don't see a good fit? Submit your resume
          </button>
        </div>
      </div>
    </section>
  );
};

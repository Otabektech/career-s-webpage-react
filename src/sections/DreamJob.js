import sittingMen from "../img/Image-10.png";

export const DreamJob = () => {
  return (
    <section className="dream-job-section">
      <div className="container dream-job-section-content">
        <div className="dream-job-section-image-wrapper">
          <img src={sittingMen} alt="sitting-men" />
        </div>

        <div className="dream-job-section-description">
          <h3 className="dream-job-section-heading">
            Find your dream job in our company
          </h3>
          <p className="dream-job-section-subheading">
            We hope that you will find a job that you have been dreaming about
            for a long time. If we don't have any vacancies send us your resume!
          </p>
        </div>
      </div>
    </section>
  );
};

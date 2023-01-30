import { TopNav } from "./sections/TopNav/TopNav";
// import { OnClick } from "./OnClick";
import { Hero } from "./sections/Hero/Hero";
import { Offer } from "./sections/Offer/Offer";
import { DreamJob } from "./sections/DreamJob/DreamJob";
import { Vacancy } from "./sections/Vacancy/Vacancy";
import { Footer } from "./sections/Footer/Footer";

const App = () => {
  return (
    <>
      <TopNav />
      {/* <OnClick /> */}
      <Hero />
      <Offer />
      <DreamJob />
      <Vacancy />
      <Footer />
    </>
  );
};

export default App;

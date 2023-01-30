import { TopNav } from "./sections/TopNav";
// import { OnClick } from "./OnClick";
import { Hero } from "./sections/Hero";
import { Offer } from "./sections/Offer";
import { DreamJob } from "./sections/DreamJob";
import { Vacancy } from "./sections/Vacancy";
import { Footer } from "./sections/Footer";

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

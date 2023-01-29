import { TopNav } from "./sections/TopNav";
import { Hero } from "./sections/Hero";
import { Offer } from "./sections/Offer";
import { DreamJob } from "./sections/DreamJob";
import { Vacancy } from "./sections/Vacancy";
import { Footer } from "./sections/Footer";

const App = () => {
  return (
    <>
      <TopNav />
      <Hero />
      <Offer />
      <DreamJob />
      <Vacancy />
      <Footer />
    </>
  );
};

export default App;

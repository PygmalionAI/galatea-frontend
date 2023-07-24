import { Info, LandingNavBar } from "../components";
import Footer from "../components/Shared/Footer";
import StarsBackground from "../components/Shared/StarsBackground";

const Landing = () => {
  return (
    <div className="bg-ga-black-lighter">
      <StarsBackground />
      <LandingNavBar />
      <Info />
      <Footer />
    </div>
  );
};

export default Landing;

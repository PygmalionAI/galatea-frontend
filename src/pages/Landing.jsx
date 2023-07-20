import { Info, LandingNavBar } from "../components";
import Stars from "../components/Shared/Stars";

const Landing = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative bg-primary bg-cover bg-center bg-no-repeat">
        <Stars />
        <LandingNavBar />
        <Info />
      </div>
      <div className="relative z-0"></div>
    </div>
  );
};

export default Landing;

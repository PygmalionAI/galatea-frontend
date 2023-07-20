import { Info, LandingNavBar } from "../components";
import Stars from "../components/Shared/Stars";

const Landing = () => {
  return (
    <div className="bg-primary">
      <div className="bg-primary bg-cover bg-center bg-no-repeat">
        <Stars />
        <LandingNavBar />
        <Info />
      </div>
    </div>
  );
};

export default Landing;

import { Info, LandingNavBar } from "../components";
import StarsBackground from "../components/Shared/StarsBackground";

const Landing = () => {
  return (
    <div className="bg-primary">
      <div className="bg-primary bg-cover bg-center bg-no-repeat">
        <StarsBackground />
        <LandingNavBar />
        <Info />
      </div>
    </div>
  );
};

export default Landing;

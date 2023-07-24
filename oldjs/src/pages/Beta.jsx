import { BetaInfo, BetaNavBar } from "../components";
import StarsBackground from "../components/Shared/StarsBackground";

const Beta = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative bg-primary bg-cover bg-center bg-no-repeat">
        <StarsBackground />
        <BetaNavBar />
        <BetaInfo />
      </div>
      <div className="relative z-0"></div>
    </div>
  );
};

export default Beta;

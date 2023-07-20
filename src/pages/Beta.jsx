import { BetaInfo, BetaNavBar } from "../components";
import Stars from "../components/Shared/Stars";

const Beta = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative bg-primary bg-cover bg-center bg-no-repeat">
        <Stars />
        <BetaNavBar />
        <BetaInfo />
      </div>
      <div className="relative z-0"></div>
    </div>
  );
};

export default Beta;

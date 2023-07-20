import { NotFound, NotFoundNavBar } from "../components";
import StarsBackground from "../components/Shared/StarsBackground";

const NotFoundPage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="relative bg-primary bg-cover bg-center bg-no-repeat">
          <StarsBackground />
          <NotFoundNavBar />
          <NotFound />
        </div>
        <div className="relative z-0"></div>
      </div>
    </>
  );
};

export default NotFoundPage;

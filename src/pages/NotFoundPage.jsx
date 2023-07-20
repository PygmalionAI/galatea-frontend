import { NotFound, NotFoundNavBar } from "../components";

const NotFoundPage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="relative bg-primary bg-cover bg-center bg-no-repeat">
          <Stars />
          <NotFoundNavBar />
          <NotFound />
        </div>
        <div className="relative z-0"></div>
      </div>
    </>
  );
};

export default NotFoundPage;

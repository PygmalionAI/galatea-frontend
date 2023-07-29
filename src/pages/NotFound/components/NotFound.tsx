export const NotFound = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`px-custom absolute inset-0 top-[25%] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-ga-violet" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={`heroHeadText text-ga-white-default`}>
            404<span className="text-ga-blue"></span>
          </h1>
          <p className={`heroSubText mt-2 text-ga-white-darker`}>
            That page couldn't be found.
            <br className="hidden sm:block" /> Are you looking for something
            else?
          </p>
        </div>
      </div>
    </section>
  );
};

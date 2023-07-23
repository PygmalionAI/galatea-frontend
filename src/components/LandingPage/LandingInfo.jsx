const Info = () => {
  return (
    <main className="px-custom mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 py-40">
      <section className="flex flex-row gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-ga-violet" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`heroHeadText text-ga-white-default`}>
            Pygmalion<span className="text-ga-blue">AI</span>
          </h1>
          <p className={`heroSubText mt-2 text-ga-white-darker`}>
            PygmalionAI is an open-source project
            <br className="hidden sm:block" /> dedicated to creating large
            language models
            <br className="hidden sm:block" /> for chat and role-play purposes.
            <br className="hidden sm:block" />{" "}
            <br className="mb-4 hidden sm:block" />
            Coming soon!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Info;

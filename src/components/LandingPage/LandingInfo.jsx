const Info = () => {
  return (
    <main className="px-custom mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 py-40">
      <section className="relative flex flex-row gap-8 py-12">
        <div className="absolute -top-16 left-1/2 flex rotate-90 flex-col items-center justify-center md:static md:rotate-0">
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

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold">About Us</h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          Welcome to PygmalionAI, an exciting open-source project that aims to
          revolutionize the world of chat and role-play with cutting-edge
          language models. Our mission is to provide a platform where users can
          effortlessly engage with powerful language models for various
          purposes. Whether you want to have captivating conversations or delve
          into immersive role-playing scenarios, PygmalionAI has got you
          covered!
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold md:order-2">
          What to Expect
        </h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          At PygmalionAI, we're committed to delivering an exceptional user
          experience. Our website will feature a custom frontend and a robust
          custom backend, designed as a seamless full-stack system. The primary
          objective of our website is to provide the PygmalionAI community
          access to our language models without the burden of hardware
          limitations, financial constraints, or any other barriers that may
          hinder running these models locally.
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold">
          Cutting-Edge Model Loader
        </h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          One of the key aspects that sets PygmalionAI apart is our in-house
          developed cutting-edge model loader. This backend technology is
          specially crafted to efficiently handle user-generated requests,
          ensuring a smooth and responsive experience for our community members.
          We are dedicated to exceeding the capabilities of current services,
          and our model loader is poised to take the lead in delivering top-tier
          performance.
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold md:order-2">
          Empowering Creativity
        </h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          Understanding the diverse needs of our users, PygmalionAI is committed
          to incorporating quality-of-life features and power user tools into
          our website. We believe in providing an intuitive design that fosters
          an enjoyable and enriching experience for everyone. Our goal is to
          create a platform where creativity knows no bounds, and your
          imagination can run wild.
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold">Seamless Integration</h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          PygmalionAI offers seamless integration with popular chat and
          role-play platforms, making it easy for users to incorporate our
          powerful language models into their existing workflows. Whether you're
          a game master looking to enhance your role-playing sessions or a
          developer seeking to integrate AI-driven conversations into your app,
          PygmalionAI's APIs and SDKs have you covered.
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-8 md:grid-cols-3">
        <h1 className="text-center text-3xl font-bold md:order-2">
          Join Our Community
        </h1>
        <p className="col-span-2 text-sm font-medium text-ga-white-darker md:text-base">
          PygmalionAI is more than just a project; it's a thriving community of
          AI enthusiasts, developers, and role-playing aficionados. We welcome
          you to join our community, collaborate on projects, and explore the
          endless possibilities of language models. Together, we can shape the
          future of interactive AI-driven experiences and have a positive impact
          on the world.
        </p>
      </section>
    </main>
  );
};

export default Info;

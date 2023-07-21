import { getAuth } from "firebase/auth";

const BetaInfo = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`px-custom absolute inset-0 top-[25%] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#D021A1]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`heroHeadText text-ga-white`}>Welcome</h1>
          <p className={`heroSubText mt-2 text-ga-white-darker`}>
            Your account has been created successfully.{" "}
            <br className="hidden sm:block" /> To participate in our closed beta
            program, <br className="hidden sm:block" /> please join the
            PygmalionAI{" "}
            <span className="text-[#1A78D6]">
              <a
                href="https://discord.gg/pygmalionai"
                target="_blank"
                className="underline-animation after:bg-blue-500"
              >
                Discord.
              </a>
            </span>{" "}
            <br className="hidden sm:block" />{" "}
            <br className="hidden sm:block" />
            Thank you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaInfo;

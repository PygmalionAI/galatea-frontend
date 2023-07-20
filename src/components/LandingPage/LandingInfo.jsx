import { styles } from "../../styles";

const Info = () => {
  return (
    <section className="min-h-screen w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[25%] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#D021A1]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Pygmalion<span className="text-[#1A78D6]">AI</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            PygmalionAI is an open-source project
            <br className="hidden sm:block" /> dedicated to creating large
            language models
            <br className="hidden sm:block" /> for chat and role-play purposes.
            <br className="hidden sm:block" />{" "}
            <br className="hidden sm:block" />
            Coming soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;

import { ChevronRight } from "lucide-react";
import Button from "../Shared/Button";
import { LandingSection } from "./LandingSection";

const Info = () => {
  return (
    <main className="px-custom mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 py-16">
      <section className="relative flex min-h-[90vh] animate-fade-up flex-col items-center justify-center gap-8 py-12">
        <div>
          <h1 className={`heroHeadText text-center text-ga-white-default`}>
            Pygmalion<span className="text-ga-blue">AI</span>
          </h1>
          <p className={`heroSubText mt-2 text-center text-ga-white-darker`}>
            PygmalionAI is an open-source project
            <br className="hidden sm:block" /> dedicated to creating large
            language models
            <br className="hidden sm:block" /> for chat and role-play purposes.
            <br className="hidden sm:block" />{" "}
            <br className="mb-4 hidden sm:block" />
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            text="Join our Discord"
            link="https://discord.gg/5QgbeuX"
            classes="md:text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2"
          >
            <p>Sign Up Now</p>
            <ChevronRight />
          </Button>

          <p className="text-ga-white-darker">Pygmalion is coming soon!</p>
        </div>
      </section>

      <div className="flex flex-col gap-32">
        <LandingSection
          title="About Us"
          content="PygmalionAI was founded by a group of AI enthusiasts who are passionate about creating powerful language models. Our team is comprised of talented individuals with diverse backgrounds and skillsets, all united by a common goal: to build a thriving community of AI-driven chat and role-play enthusiasts. We are committed to delivering an exceptional user experience and providing a platform where creativity knows no bounds."
          align="left"
        />

        <LandingSection
          title="Our Mission"
          content="At PygmalionAI, we're committed to delivering an exceptional user experience. Our website will feature a custom frontend and a robust custom backend, designed as a seamless full-stack system. The primary objective of our website is to provide the PygmalionAI community access to our language models without the burden of hardware limitations, financial constraints, or any other barriers that may hinder running these models locally."
          align="right"
        />

        <LandingSection
          title="Cutting-Edge Model Loader"
          content="One of the key aspects that sets PygmalionAI apart is our in-house developed cutting-edge model loader. This backend technology is specially crafted to efficiently handle user-generated requests, ensuring a smooth and responsive experience for our community members. We are dedicated to exceeding the capabilities of current services, and our model loader is poised to take the lead in delivering top-tier performance."
          align="left"
        />

        <LandingSection
          title="Our Vision"
          content="Understanding the diverse needs of our users, PygmalionAI is committed to incorporating quality-of-life features and power user tools into our website. We believe in providing an intuitive design that fosters an enjoyable and enriching experience for everyone. Our goal is to create a platform where creativity knows no bounds, and your imagination can run wild."
          align="right"
        />

        <LandingSection
          title="Seamless Integration"
          content="PygmalionAI offers seamless integration with popular chat and role-play platforms, making it easy for users to incorporate our powerful language models into their existing workflows. Whether you're a game master looking to enhance your role-playing sessions or a developer seeking to integrate AI-driven conversations into your app, PygmalionAI's APIs and SDKs have you covered."
          align="left"
        />

        <LandingSection
          title="Community-Driven"
          content="PygmalionAI is more than just a project; it's a thriving community of AI enthusiasts, developers, and role-playing aficionados. We welcome you to join our community, collaborate on projects, and explore the endless possibilities of language models. Together, we can shape the future of interactive AI-driven experiences and have a positive impact on the world."
          align="right"
        />
      </div>
    </main>
  );
};

export default Info;
import { twJoin } from "tailwind-merge";

export function LandingSection(props) {
  return (
    <section
      className={twJoin(
        "mx-auto flex max-w-5xl flex-col gap-4 md:gap-8",
        props.align === "left" ? "items-start" : "items-end",
      )}
    >
      <h1
        className={twJoin(
          "bg-gradient-to-b from-ga-white-default to-ga-white-darker bg-clip-text text-center text-2xl font-bold md:text-5xl",
          props.align == "left" ? "text-start" : "text-end",
        )}
      >
        {props.title}
      </h1>
      <p
        className={twJoin(
          "text-sm font-medium text-ga-white-darker md:w-2/3 md:text-base",
          props.align == "left" ? "text-start" : "text-end",
        )}
      >
        {props.content}
      </p>
    </section>
  );
}

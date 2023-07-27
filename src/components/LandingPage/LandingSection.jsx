import { twJoin } from "tailwind-merge";

export function LandingSection(props) {
  return (
    <div
      className={twJoin(
        "group flex items-center justify-between gap-2",
        props.align == "left" ? "flex-row" : "flex-row-reverse",
      )}
    >
      <section
        className={twJoin(
          "mx-auto flex max-w-5xl flex-col gap-4 transition-all hover:scale-110 md:gap-8",
          props.align === "left" ? "items-start" : "items-end",
        )}
      >
        <h1
          className={twJoin(
            "bg-gradient-to-r from-ga-white-default to-ga-blue bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl",
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

      <div className="absolute h-80 w-80 rounded-full bg-ga-blue/10 blur-3xl transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:blur-2xl" />
    </div>
  );
}

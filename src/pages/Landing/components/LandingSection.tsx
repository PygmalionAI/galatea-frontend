import { LazyMotion, domAnimation, m } from "framer-motion";
import { twJoin } from "tailwind-merge";

export function LandingSection(props:{
	  title: string;
	  content: string;
	  align: "left" | "right";
	  children?: React.ReactNode;
	  imageLink: string;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <div
          className={twJoin(
            "group flex flex-col items-center gap-4",
            props.align == "left" ? "md:flex-row" : "md:flex-row-reverse",
          )}
        >
          <section
            className={twJoin(
              "mx-auto flex max-w-5xl flex-col gap-4 transition-all md:gap-8",
              props.align === "left" ? "items-start" : "items-end",
            )}
          >
            <h1
              className={twJoin(
                "overflow-visible bg-gradient-to-br from-ga-white-default via-ga-white-default to-ga-purple-default bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl",
                props.align == "left" ? "text-start" : "text-end",
              )}
            >
              {props.title}
            </h1>
            <p
              className={twJoin(
                "max-w-xl font-medium text-ga-white-darker md:text-lg",
                props.align == "left" ? "text-start" : "text-end",
              )}
            >
              {props.content}
            </p>
          </section>

          {/* flip horizontaly in place with smooth animation when it comes into view */}
          <m.div
            className="absolute md:static"
            initial={{
              scale: 0.8,
            }}
            transition={{
              ease: "easeInOut",
            }}
            whileInView={{
              scale: 0.9,
              rotateZ: -10,
            }}
            whileTap={{
              scale: 0.8,
              rotateZ: 50,
            }}
          >
            <img
              src={props.imageLink}
              className={twJoin(
                props.align == "left" ? "ml-auto" : "mr-auto",
                "w-2/3 rounded-3xl bg-gradient-to-t from-ga-blue/10 to-ga-purple-darker/10 p-2 opacity-10 sm:max-w-sm md:w-full md:p-16 md:opacity-100",
              )}
            />
          </m.div>

          <div className="absolute h-60 w-60 rounded-full blur-3xl transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:blur-2xl md:bg-ga-blue/10" />
        </div>
      </m.div>
    </LazyMotion>
  );
}

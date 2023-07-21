import { useEffect } from "react";
import { Info, LandingNavBar } from "../components";

const Landing = () => {
  useEffect(() => {
    const numStars = 10; // Number of shooting stars to generate

    // Generate shooting stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration between 1 and 4 seconds
      star.style.left = `${Math.random() * 100}%`; // Random horizontal position
      star.style.top = `${Math.random() * 100}%`; // Random vertical position

      document.querySelector(".star-container").appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="bg-ga-black-defaultrelative z-0">
        <div className="bg-ga-black-defaultrelative bg-cover bg-center bg-no-repeat">
          <div className="absolute h-full w-full">
            <div className="star-container absolute inset-0 flex items-center justify-center"></div>
          </div>
          <LandingNavBar />
          <Info />
        </div>
        <div className="relative z-0"></div>
      </div>
    </>
  );
};

export default Landing;

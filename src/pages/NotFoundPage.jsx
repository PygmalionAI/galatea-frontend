import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotFoundNavBar, NotFound } from '../components' 

const NotFoundPage = () => {
  useEffect(() => {
    const numStars = 10; // Number of shooting stars to generate

    // Generate shooting stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration between 1 and 4 seconds
      star.style.left = `${Math.random() * 100}%`; // Random horizontal position
      star.style.top = `${Math.random() * 100}%`; // Random vertical position

      document.querySelector('.star-container').appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-primary bg-cover bg-no-repeat bg-center relative">
          <div className="absolute w-full h-full">
            <div className="absolute inset-0 flex justify-center items-center star-container"></div>
          </div>
          <NotFoundNavBar />
          <NotFound />
        </div>
        <div className="relative z-0"></div>
      </div>
    </>
  );
};

export default NotFoundPage;

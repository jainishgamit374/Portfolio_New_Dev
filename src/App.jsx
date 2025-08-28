import React, { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Loader from './Components/Loader'
import Pages from './Components/Pages'

const App = () => {
  const [isStartClicked, setIsStartClicked] = useState(false);

  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  const handleStartClick = () => {
    setIsStartClicked(true);
  };

  // Initialize Lenis only after START button is clicked
  useEffect(() => {
    if (isStartClicked) {
      setTimeout(() => {
        lenisFn();
      }, 600); // Delay to ensure loader finishes hiding
    }
  }, [isStartClicked]);

  return (
    <>
      <div className="main w-full min-h-screen bg-[#1A1A1A] text-white">
        <Loader onStartClick={handleStartClick} />
        <Pages/>
      </div>
    </>
  )
}

export default App
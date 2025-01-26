import React, { useEffect } from "react";

const Petals = () => {
  useEffect(() => {
    const petalCount = 100; // Number of petals to create (more petals for more coverage)
    const petalsContainer = document.querySelector(".petals");

    // Function to create petals with random positions and animations
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      // Randomize each petal's horizontal starting position and animation duration
      const randomLeft = Math.random() * 100; // Random horizontal position (between 0 and 100%)
      const randomDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5 and 10 seconds
      const randomDelay = `${Math.random() * 5}s`; // Random delay before animation starts

      // Set the petal's animation variables dynamically
      petal.style.setProperty("--random-left", `${randomLeft}%`);
      petal.style.setProperty("animation-duration", randomDuration);
      petal.style.setProperty("animation-delay", randomDelay);

      petalsContainer.appendChild(petal);
    }

    // Cleanup the generated petals when the component unmounts
    return () => {
      petalsContainer.innerHTML = ""; // Remove all petals when the component is unmounted
    };
  }, []);

  return <div className="petals"></div>; // No fade-in class here, petals should always be active
};

export default Petals;

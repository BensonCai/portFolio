import React, { useEffect, useState } from "react";
import "../stylesheets/precursor.css";

// Rain component to create the rain effect
const Rain = () => {
    // State variables to hold arrays of drops for both the front and back rows of rain
    const [drops, setDrops] = useState([]); // Front-row raindrops
    const [backDrops, setBackDrops] = useState([]); // Back-row raindrops

    // Function to generate the raindrops
    const makeItRain = () => {
        let increment = 0; // Variable to control spacing between drops
        let dropsArray = []; // Array to store front-row raindrops
        let backDropsArray = []; // Array to store back-row raindrops

        // Loop to create raindrops until we fill the screen (increments go up to 100%)
        while (increment < 100) {
            // Randomize values to make the raindrops' behavior and position more natural
            let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1); // Random delay for animation (1 to 98)
            let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2); // Random width increment (2 to 5%)

            // Incrementing the position for the next raindrop (spread across the width of the screen)
            increment += randoFiver;

            // Creating the raindrop object with properties for position and animation
            dropsArray.push({
                id: increment, // Unique ID (using increment as a simple ID)
                left: `${increment}%`, // Left position for the raindrop (percentage of the screen width)
                bottom: `${randoFiver + randoFiver - 1 + 100}%`, // Bottom position to start the drop (from above the screen)
                animationDelay: `0.${randoHundo}s`, // Random animation delay
                animationDuration: `0.5${randoHundo}s`, // Random animation duration for how long it takes the raindrop to fall
            });

            // Similarly, create raindrops for the back-row
            backDropsArray.push({
                id: increment, // Same ID as the front drop
                right: `${increment}%`, // Position from the right side for the back-row raindrop
                bottom: `${randoFiver + randoFiver - 1 + 100}%`, // Same bottom position
                animationDelay: `0.${randoHundo}s`, // Same random delay
                animationDuration: `0.5${randoHundo}s`, // Same random duration
            });
        }

        // Update the state with the newly generated drops and backdrops
        setDrops(dropsArray); // Set front-row raindrops
        setBackDrops(backDropsArray); // Set back-row raindrops
    };

    // useEffect runs once after the component renders to start the rain animation
    useEffect(() => {
        makeItRain(); // Calls the function to generate raindrops
    }, []); // Empty dependency array means this effect runs only once

    // The JSX to render the raindrops on the screen
    return (
        <div className="">
            {/* Front row of rain */}
            <div className="rain front-row">
                {drops.map((drop) => (
                    // Each raindrop in the front row
                    <div
                        key={drop.id} // Unique key for each raindrop (using the incremented ID)
                        className="drop"
                        style={{
                            left: drop.left, // Left position (from the generated random position)
                            bottom: drop.bottom, // Bottom position (how high the drop starts)
                            animationDelay: drop.animationDelay, // Animation delay (randomized)
                            animationDuration: drop.animationDuration, // Animation duration (randomized)
                        }}
                    >
                        {/* The "stem" of the raindrop (the long falling line) */}
                        <div
                            className="stem"
                            style={{
                                animationDelay: drop.animationDelay, // Same delay for stem as for drop
                                animationDuration: drop.animationDuration, // Same duration as for drop
                            }}
                        ></div>

                        {/* The "splat" of the raindrop (when it hits the ground) */}
                        <div
                            className="splat"
                            style={{
                                animationDelay: drop.animationDelay, // Same delay for splat
                                animationDuration: drop.animationDuration, // Same duration for splat
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Back row of rain */}
            <div className="rain back-row">
                {backDrops.map((drop) => (
                    // Each raindrop in the back row
                    <div
                        key={drop.id} // Unique key for each raindrop
                        className="drop"
                        style={{
                            right: drop.right, // Right position (for back row drops)
                            bottom: drop.bottom, // Same bottom position
                            animationDelay: drop.animationDelay, // Same delay as front row
                            animationDuration: drop.animationDuration, // Same duration as front row
                        }}
                    >
                        {/* Stem of the back row raindrop */}
                        <div
                            className="stem"
                            style={{
                                animationDelay: drop.animationDelay,
                                animationDuration: drop.animationDuration,
                            }}
                        ></div>

                        {/* Splat of the back row raindrop */}
                        <div
                            className="splat"
                            style={{
                                animationDelay: drop.animationDelay,
                                animationDuration: drop.animationDuration,
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rain;

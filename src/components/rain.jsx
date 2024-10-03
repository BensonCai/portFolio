import React, { useEffect, useState } from 'react';
import '../stylesheets/precursor.css';

const Rain = () => {
    const [drops, setDrops] = useState({ front: [], back: [] });

    const makeItRain = () => {
        const newFrontDrops = [];
        const newBackDrops = [];
        let increment = 0;

        while (increment < 100) {
            // Random numbers for various randomizations
            const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
            const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            increment += randoFiver;

            // Create front drop
            newFrontDrops.push(
                <div
                    key={`front-${increment}`}
                    className="drop"
                    style={{
                        left: `${increment}%`,
                        bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                        animationDelay: `0.${randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                >
                    <div
                        className="stem"
                        style={{
                            animationDelay: `0.${randoHundo}s`,
                            animationDuration: `0.5${randoHundo}s`,
                        }}
                    ></div>
                    <div
                        className="splat"
                        style={{
                            animationDelay: `0.${randoHundo}s`,
                            animationDuration: `0.5${randoHundo}s`,
                        }}
                    ></div>
                </div>
            );

            // Create back drop
            newBackDrops.push(
                <div
                    key={`back-${increment}`}
                    className="drop"
                    style={{
                        right: `${increment}%`,
                        bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                        animationDelay: `0.${randoHundo}s`,
                        animationDuration: `0.5${randoHundo}s`,
                    }}
                >
                    <div
                        className="stem"
                        style={{
                            animationDelay: `0.${randoHundo}s`,
                            animationDuration: `0.5${randoHundo}s`,
                        }}
                    ></div>
                    <div
                        className="splat"
                        style={{
                            animationDelay: `0.${randoHundo}s`,
                            animationDuration: `0.5${randoHundo}s`,
                        }}
                    ></div>
                </div>
            );
        }

        setDrops({ front: newFrontDrops, back: newBackDrops });
    };

    useEffect(() => {
        makeItRain();
    }, []); // Run once when the component mounts

    return (
        <body className="back-row-toggle splat-toggle">
            <div className="rain front-row">{drops.front}</div>
            <div className="rain back-row">{drops.back}</div>
        </body>
    );
};

export default Rain;

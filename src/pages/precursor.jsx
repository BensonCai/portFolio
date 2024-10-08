import React, { useState, useEffect } from "react";
import "../stylesheets/precursor.css"
import { useNavigate } from 'react-router-dom';
import Rain from "../components/rain";

export default function Precursor() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set a small delay to ensure the initial CSS state is applied
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/me')
        }, 500); // Match this duration with the CSS transition time
    };

    return (
        <div id="precursor-background" className="w-screen h-screen">
            <Rain />
            <div className={`precursorContainer ${isLoaded ? 'loaded' : ''} ${isAnimating ? 'slide-out' : ''}`}>
                <button
                    className={`precursor`}
                    onClick={handleClick}
                >
                    <span className="front" style={{color: "#efe9df"}}>Start</span>
                </button>
            </div>
        </div>
    )
}

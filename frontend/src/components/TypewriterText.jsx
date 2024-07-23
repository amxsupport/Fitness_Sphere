import React, { useEffect, useState } from "react";

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            if (currentIndex < text?.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 30); // Adjust the delay as needed

        return () => clearTimeout(typingTimer);
    }, [currentIndex, text]);

    return (
        <div className="font-bold text-justify">
            <p>{displayText}</p>
        </div>
    );
};

export default TypewriterText;

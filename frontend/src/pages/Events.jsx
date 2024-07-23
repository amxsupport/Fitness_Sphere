import React, { useEffect } from "react";

const Events = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://allevents.in/scripts/public/ae-plugin-embed-lib.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div
                className="ae-embed-plugin"
                data-type="city"
                data-cityname="Mumbai"
                data-category="Sports"
                data-sort={0}
                data-header={1}
            ></div>
        </>
    );
};

export default Events;

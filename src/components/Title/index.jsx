import React from "react";
import "./title.css";

export const Title =  ({greeting}) => {
    return (
        <h1 className="greeting">{greeting}</h1>
    );
}

export default Title;
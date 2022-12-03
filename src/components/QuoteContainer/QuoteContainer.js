import React from "react";
import "./quoteContainer.css";
import { Quote } from "../Quote/Quote";

export const QuoteContainer = ({quotes}) => {

    return (
        <div className="quote-container">
            <Quote quotes={quotes}/>
        </div>
    )
}
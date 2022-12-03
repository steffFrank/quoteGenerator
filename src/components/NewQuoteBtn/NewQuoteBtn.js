import React from "react";
import "./newQuoteBtn.css";

export const NewQuoteBtn = ({randomQuote}) => {
    return (
        <button className="btn btn-quote" onClick={() => randomQuote()}>
           New Quote
        </button>
    )
}
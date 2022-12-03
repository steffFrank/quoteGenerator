import React from "react";
import "./twitterBtn.css";


export const TwitterBtn = ({tweetQuote}) => {
    return (
        <button className="btn btn-twitter" onClick={() => tweetQuote()}>
            <i className="fab fa-twitter"></i>
        </button>
    )
}
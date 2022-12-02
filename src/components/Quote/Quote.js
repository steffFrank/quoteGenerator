import React from "react";
import "./quote.css";
import { NewQuote } from "../NewQuote/NewQuote";
import { TwitterBtn } from "../TwitterBtn/TwitterBtn";

export const Quote = () => {
    return (
        <>
            <p>
                <i className="fas fa-quote-left"></i>
                <span className="quote__text">What you are is what you have been.What you'll be is what you do now.</span>
                <p className="quote__author">Buddha</p>
            </p>
            <div className="btn-container">
                <NewQuote />
                <TwitterBtn />
            </div>
        </>
    )
}
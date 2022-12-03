import React , {useState} from "react";
import "./quote.css";
import { NewQuoteBtn } from "../NewQuoteBtn/NewQuoteBtn";
import { TwitterBtn } from "../TwitterBtn/TwitterBtn";

export const Quote = ({quotes}) => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const [text, setText] = useState(quotes[randomNumber].text);
    const [author, setAuthor] = useState(quotes[randomNumber].author);


    const randomQuote = () => {
        setText(quotes[randomNumber].text);
        setAuthor(quotes[randomNumber].author);
    }

    return (
        <div>
            <p className="quote">
                <i className="fas fa-quote-left"></i>
                <span className="quote__text">{text}</span>
            </p>
            <p className="quote__author">{author}</p>
            <div className="btn-container">
                <TwitterBtn />
                <NewQuoteBtn randomQuote={randomQuote}/>
            </div>
        </div>
    )
}
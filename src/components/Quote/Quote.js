import React , {useState} from "react";
import "./quote.css";
import { NewQuoteBtn } from "../NewQuoteBtn/NewQuoteBtn";
import { TwitterBtn } from "../TwitterBtn/TwitterBtn";

export const Quote = ({quotes}) => {
    const setRandomNumber = () => Math.floor(Math.random() * quotes.length);
    const randomNumber = setRandomNumber();
    const [text, setText] = useState(quotes[randomNumber].text);
    const [author, setAuthor] = useState(quotes[randomNumber].author);


    const randomQuote = () => {
        const randomNumber = setRandomNumber();
        const quoteText = quotes[randomNumber].text;
        const quoteAuthor = quotes[randomNumber].author;
        console.log(quoteText);
        setText(quoteText);
        quoteAuthor ? setAuthor(quoteAuthor) : setAuthor("Unknown");
    }
    const tweetQuote = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
        window.open(twitterUrl, "_blank");
    }
    return (
        <div>
            <p className="quote">
                <i className="fas fa-quote-left"></i>
                <span className="quote__text">{text}</span>
            </p>
            <p className="quote__author">{author}</p>
            <div className="btn-container">
                <TwitterBtn tweetQuote={tweetQuote} />
                <NewQuoteBtn randomQuote={randomQuote} />
            </div>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import "./app.css";
import { QuoteContainer } from "./components/QuoteContainer/QuoteContainer";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";

const App = () => {
    
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getQuotes = async () => {
        const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
        try {
            const response = await fetch(apiUrl);
            const fetchedData = await response.json();
            setQuotes(fetchedData);
            setIsLoading(false);
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuotes();
    }, [])

    return (
        isLoading ? <LoadingSpinner /> : <QuoteContainer quotes={quotes}/>  
    )
}

export default App;
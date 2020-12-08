import React, { useState, useEffect } from "react";
import axios from "axios";


const Search = () => {

    const [term, setTerm] = useState("Computer");
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    //*Denna körs varje gång term ändras
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm,
                }
            });

            setResults(data.query.search);

        };
        search();

    }, [debouncedTerm])


    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;



/*
   //*Första argumentet i useEffect är alltid en function
    //*Det andra argumentet bestämmer när koden ska bli executed
    //*Andra argumenetet kan antingen ha, ingeting, en tom array [], eller en array med någon data i sig [data]
    //*Detta bestämmer när useEffect ska köras.
    useEffect(() => {
        //*Detta fungerar exakt samma som en vanlig function bara utan function syntaxen
        (async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    actions: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });

            setResults(data);

        })(); //*Man invoker den direkt här


*/
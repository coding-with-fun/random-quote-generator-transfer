import React, { Fragment, useContext, useEffect, useState } from "react";
import { QuotesContext } from "../context/QuotesContext";

const Quote = () => {
    const { quoteData, RandomQuote } = useContext(QuotesContext);

    const [currentQuote, setCurrentQuote] = useState({
        content: "",
        author: "",
    });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex === quoteData.length - 1) {
            RandomQuote();
        }
        quoteData[currentIndex] && setCurrentQuote(quoteData[currentIndex]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quoteData, currentIndex]);

    return (
        <div className="card__container">
            <div className="card__body container">
                <div className="card__data">
                    {currentQuote.content === "" ? (
                        <div className="loader__container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <Fragment>
                            <div className="content">
                                {currentQuote.content}
                            </div>
                            <footer class="blockquote-footer">
                                <cite title="Source Title">
                                    {currentQuote.author}
                                </cite>
                            </footer>
                        </Fragment>
                    )}
                </div>
                <div className="button__container">
                    <button
                        disabled={currentIndex === 0 ? true : false}
                        onClick={() => {
                            setCurrentIndex(currentIndex - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        disabled={
                            !quoteData[currentIndex + 1]?.content ? true : false
                        }
                        onClick={() => {
                            setCurrentIndex(currentIndex + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quote;

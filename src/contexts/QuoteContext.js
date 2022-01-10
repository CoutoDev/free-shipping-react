import React, { createContext, useState } from 'react';

export const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
    const [quoteTotals, setQuoteTotals] = useState(0)

    const updateQuoteTotals = (productPrice) => {
        setQuoteTotals(quoteTotals + productPrice)
    }

    return (
        <QuoteContext.Provider value={{ quoteTotals, updateQuoteTotals }}>
            { children }
        </QuoteContext.Provider>
    )
}

export default QuoteProvider
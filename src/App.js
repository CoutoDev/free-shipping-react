import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import FreeShipping from './components/FreeShipping/FreeShipping';

function App() {
    const [quoteTotals, setQuoteTotals] = useState(0)

    const updateQuoteTotals = (productPrice) => {
        setQuoteTotals(quoteTotals + productPrice)
    }

    return (
        <div className="App">
            <FreeShipping totalToApplyFreeShipping={150} quoteTotals={quoteTotals}/>
            <ProductList updateQuoteTotals={updateQuoteTotals}/>
        </div>
    );
}

export default App;
import React from 'react';
import ProductList from './components/ProductList/ProductList';
import FreeShipping from './components/FreeShipping/FreeShipping';

import QuoteProvider from './contexts/QuoteContext';

const App = () => {
    return (
        <div className="App">
            <QuoteProvider>
                <FreeShipping totalToApplyFreeShipping={150.00}/>
                <ProductList />
            </QuoteProvider>
        </div>
    );
}

export default App;
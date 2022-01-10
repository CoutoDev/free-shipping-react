import React from 'react';
import ProductList from './components/ProductList/ProductList';
import FreeShipping from './components/FreeShipping/FreeShipping';

import QuoteProvider from './contexts/QuoteContext';

function App() {
    return (
        <QuoteProvider className="App">
            <FreeShipping totalToApplyFreeShipping={150}/>
            <ProductList />
        </QuoteProvider>
    );
}

export default App;
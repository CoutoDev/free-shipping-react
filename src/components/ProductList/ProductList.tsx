import React, { useState, useEffect } from 'react';
import Product from '../Product/Product'
import styled from 'styled-components';

const StyledProductList = styled.section`
    display: grid;
    padding: 20px;
    gap: 15px 10px;
    grid-template-columns: repeat(4, 1fr);
`;

interface ProductInterface {
    id: number,
    image: string,
    title: string,
    price: number
}

const ProductList = () => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductInterface[]>([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <StyledProductList>
            {products && products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </StyledProductList>
    )
}

export default ProductList
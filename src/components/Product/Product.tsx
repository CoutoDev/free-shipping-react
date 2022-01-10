import React, { MouseEvent, useContext } from 'react';
import styled from 'styled-components';
import { QuoteContext } from '../../contexts/QuoteContext'

const ProductCard = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    justify-content: space-between;
    width: 300px;
`;

const ProductImage = styled.img`
    height: auto;
    object-fit: cover;
    width: 100%;
`;

const AddToCart = styled.button`
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    padding: 10px 15px;
`;

interface ProductProps {
    product: {
        image: string,
        title: string,
        price: number
    };
}

const Product = ({ product }: ProductProps) => {
    const { dispatch } = useContext(QuoteContext)

    const onClick = (e: MouseEvent) => {
        e.preventDefault()
        dispatch({type: "ADD_TO_CART", payload: product.price})
    }

    return (
        <ProductCard>
            <figure className="product-image">
                <ProductImage src={product.image} alt="Product" />
            </figure>
            <h4 className="product-name">
                {product.title}
            </h4>
            <span className="product-price">
                R$ {product.price}
            </span>
            <AddToCart type="submit" onClick={onClick}>
                Adicionar ao Carrinho
            </AddToCart>
        </ProductCard>
    )
}

export default Product
import React from 'react';
import styled from 'styled-components';

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

function Product(props) {
    const { product, updateQuoteTotals } = props

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
            <AddToCart type="submit" onClick={() => updateQuoteTotals(product.price)}>
                Adicionar ao Carrinho
            </AddToCart>
        </ProductCard>
    )
}

export default Product
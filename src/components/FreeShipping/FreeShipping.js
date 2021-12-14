import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar';

const FreeShippingBar = styled.section`
    align-items: center;
    background-color: #b8c7ff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80px;
    margin: 0 0 20px;
    place-items: center;
    width: 100%;

    p {
        margin: 0;
    }
`;

function FreeShipping(props) {
    const totalToApplyFreeShipping = props.totalToApplyFreeShipping

    return (
        <FreeShippingBar>
            <div>
                <p>Nas compras acima de R$ {totalToApplyFreeShipping}, ganhe <em>Frete Gratis</em></p>
                <p>Total Atual: R$ {parseFloat(props.quoteTotals).toFixed(2)}</p>
            </div>
            <ProgressBar amount={props.quoteTotals} goal={totalToApplyFreeShipping}/>
        </FreeShippingBar>
    )
}

export default FreeShipping;
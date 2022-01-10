import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuoteContext } from '../../contexts/QuoteContext';
import ProgressBar from '../ProgressBar/ProgressBar';

const FreeShippingBar = styled.section`
    align-items: center;
    background-color: #b8c7ff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80px;
    margin: 0 0 20px;
    place-items: center;
    position: sticky;
    top: 0;
    width: 100%;

    p {
        margin: 0;
    }
`;

interface FreeShippingProps {
    totalToApplyFreeShipping: number;
}

const FreeShipping = (props: FreeShippingProps) => {
    const totalToApplyFreeShipping = props.totalToApplyFreeShipping
    const { state } = useContext(QuoteContext)

    return (
        <FreeShippingBar>
            <div>
                <p>Nas compras acima de R$ {totalToApplyFreeShipping} ganhe <em>Frete Gratis</em></p>
                <p>Total Atual: R$ {state.quoteTotals ? (state.quoteTotals).toFixed(2) : '0.00'}</p>
            </div>
            <ProgressBar amount={state.quoteTotals} goal={totalToApplyFreeShipping}/>
        </FreeShippingBar>
    )
}

export default FreeShipping;
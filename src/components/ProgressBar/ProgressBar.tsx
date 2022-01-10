import React from 'react';
import styled from 'styled-components'

interface ProgressBarProps {
    amount: number;
    goal: number;
}


const ProgressBar = ({ amount, goal }:ProgressBarProps ) => {
    const goalPercentage = (100 * amount)/goal

    const ProgressBarContainer = styled.section`
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 90%;

        p {
            margin: 0;
        }
    `;

    const Bar = styled.div`
        width: 100%;
        height: 25px;
        background-color: gray;
        border-radius: 10px;
    `;

    const Fillment = styled.span`
        background-color: pink;
        border-radius: 10px;
        display: block;
        height: 100%;
        max-width: 100%;
        width: ${goalPercentage}%;
    `;


    return (
        <ProgressBarContainer>

            {goalPercentage <= 100 
                ? <p>Faltam R$ {(goal - amount).toFixed(2)} para Frete Grátis!</p>
                : <p>Você agora tem direito a Frete Grátis!</p>
            }
            <Bar>
                <Fillment></Fillment>
            </Bar>
        </ProgressBarContainer>
    )
}

export default ProgressBar
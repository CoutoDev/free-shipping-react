import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

type QuoteState = typeof initialState;
type Action = {
    type: "ADD_TO_CART";
    payload: number
}

interface ChildrenElementProps {
    children: ReactNode
}

const initialState = {
    quoteTotals: 0
}

const reducer = (state: QuoteState, action: Action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
            ...state,
            quoteTotals: state.quoteTotals + action.payload
        };
      default:
        throw new Error();
    }
  }

export const QuoteContext = createContext<{
    state: QuoteState;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => {}
});


const QuoteProvider = ({ children }:ChildrenElementProps ) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <QuoteContext.Provider value={{ state, dispatch }}>
            { children }
        </QuoteContext.Provider>
    )
}

export default QuoteProvider
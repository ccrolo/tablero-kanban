import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();
const CardsProgress = createContext();
const CardsDone = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    const [cardsState, updateCardsState] = useState([]);
    const [cardsProgress, updateCardsProgress] = useState([]);
    const [cardsDone, updateCardsDone] = useState([]);

    return (
        <React.Fragment>

            <CardsContext.Provider value={{ cardsState, updateCardsState }}>
                {children}
            </CardsContext.Provider>

           {/*  <CardsProgress.Provider value={{ cardsProgress, updateCardsProgress }}>
                {children}
            </CardsProgress.Provider>

            <CardsDone.Provider value={{ cardsDone, updateCardsDone }}>
                {children}
            </CardsDone.Provider> */}

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider, CardsProgress, CardsDone };
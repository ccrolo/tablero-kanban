import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    const [cardsState, updateCardsState] = useState([]);
    const [counter, counterUpdate] = useState([]);
 
    return (
        <React.Fragment>

            <CardsContext.Provider value={[{cardsState, updateCardsState},{counter, counterUpdate}]}>
                {children}
            </CardsContext.Provider>

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider };
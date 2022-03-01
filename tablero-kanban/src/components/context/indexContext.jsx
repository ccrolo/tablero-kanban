import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    const [cardsState, updateCardsState] = useState([]);
    
    return (
        <React.Fragment>

            <CardsContext.Provider value={{ cardsState, updateCardsState }}>
                {children}
            </CardsContext.Provider>

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider };
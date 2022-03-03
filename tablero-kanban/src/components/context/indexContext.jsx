import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    let [cardsState, updateCardsState] = useState([]);
    let [counter, counterUpdate] = useState([]);
    let [cardsStateFilter, updateCardsStateFilter] = useState([]);
 
    return (
        <React.Fragment>

            <CardsContext.Provider value={[{cardsState, updateCardsState},{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter}]}>
                {children}
            </CardsContext.Provider>

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider };
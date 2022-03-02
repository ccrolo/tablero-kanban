import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    

    const [cardsFilter, updateCardsFilter] = useState([]);
    const [cardsState, updateCardsState] = useState([cardsFilter]);
    const [counter, counterUpdate] = useState([]);
    const [doneArr, updateDoneArr] = useState([])
    

    
    return (
        <React.Fragment>

            <CardsContext.Provider value={[{cardsState, updateCardsState},{counter, counterUpdate},{doneArr, updateDoneArr},{cardsFilter, updateCardsFilter}]}>
                {children}
            </CardsContext.Provider>

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider };
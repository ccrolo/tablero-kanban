import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CardsContext = createContext();

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    const local = JSON.parse(localStorage.getItem('file')) ?? [];
    const cont = JSON.parse(localStorage.getItem('counter')) ?? [];

    const [cardsState, updateCardsState] = useState(local);
    const [counter, counterUpdate] = useState(cont);
    const [cardsStateFilter, updateCardsStateFilter] = useState(local);
    const [file, updateFile] = useState(local)
    
    // localStorage.setItem('file',JSON.stringify(file))
    // localStorage.setItem('counter',JSON.stringify(counter))
 
    return (
        <React.Fragment>

            <CardsContext.Provider value={[{cardsState, updateCardsState},{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter},{file, updateFile}]}>
                {children}
            </CardsContext.Provider>

        </React.Fragment>
    )
}

export default CardsContext;

export { CardsProvider };


import {createContext} from 'react';
import { useState } from 'react';

const CardsContext = createContext(); 

// Este es el componeten wrapper que expone funciones de actualización
function CardsProvider({ children }) {

    const [cardsState, updateCardsState] = useState([]);

    return (
        <CardsContext.Provider value={{cardsState,updateCardsState}}>
            {children}
        </CardsContext.Provider>
    )
}

export default CardsContext;
export {CardsProvider};
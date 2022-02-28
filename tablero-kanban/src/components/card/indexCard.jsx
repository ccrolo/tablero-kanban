import './styleCard.css'
import pending from '../../assets/icono-verde.png'
import { useContext, useState } from 'react';
import CardsContext from '../context/indexContext'



function Card(props) {
    const { cardsState, updateCardsState } = useContext(CardsContext);
    let [arrayId, arrayIdUpdate] = useState(cardsState.map(e => e.id)) //sabiamos que esto era una gitanada
    //Hacer find index para encontrar la id y nos da la posicion ==> esta es la buena
      
    const handleDelete = () => {
       
        const position = arrayId.indexOf(props.id)
        cardsState.splice(position, 1)
        updateCardsState([...cardsState])

        console.log(cardsState)

       /*  updateCardsState(cardsState.splice(position,1))
        arrayIdUpdate(arrayId.splice(position,1)) */
    }

    return (

        <div className="card_container">
            <div className='card_title'>
                <img className='pending_icon' src={pending} alt="imagen de pending" />

                <h4 >{props.task}</h4>
                <button onClick={handleDelete} className='delete'>🗑️</button>

            </div>
            <p>#23 created on 30/7/2022 8:34:54</p>
        </div>

    )
}

export default Card;
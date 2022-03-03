import './styleCard.css'
import pending from '../../assets/icono-verde.png'
import done from '../../assets/icono-rojo.png'
import { useContext, useState } from 'react';
import CardsContext from '../context/indexContext'



function Card(props) {
    const [{ cardsState, updateCardsState },{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter},{file, updateFile}] = useContext(CardsContext)
    
    const handleDelete = () => {
        const position = cardsStateFilter.findIndex(e => e.id===props.id)
        cardsStateFilter.splice(position, 1)
        updateCardsState([...cardsStateFilter])
        updateCardsStateFilter([...cardsStateFilter])
        updateFile([...cardsStateFilter])
    }

    return (

        <div className="card_container">
            <div className='card_title'>
                {
                    props.status==='ToDo'||props.status==='InProgress'?
                    <img className='pending_icon' src={pending} alt="imagen de pending" />
                    : <img className='done_icon' src={done} alt="imagen de done" />
                }
                <h4 >{props.task}</h4>
                <button onClick={handleDelete} className='delete'>🗑️</button>
            </div>
            <p>#{props.id} created on {props.date} {props.hour}</p>
        </div>

    )
}

export default Card;
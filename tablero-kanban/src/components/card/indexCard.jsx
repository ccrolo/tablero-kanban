import './styleCard.css'
import pending from '../../assets/icono-verde.png'
import { useState } from 'react'
import { useEffect } from 'react';




function Card() {

    let [IntroduceText, IntroduceTextUpdate] = useState('');


    useEffect(() => {
        IntroduceTextUpdate(localStorage.getItem('text'))
        

    }, [])
    console.log(IntroduceText)

    return (

        <div className="card_container">
            <div className='card_title'>
                <img className='pending_icon' src={pending} alt="imagen de pending" />
                
                <h4 >{IntroduceText}</h4>
                <p className='delete'>🗑️</p>
                
            </div>
            <p>#23 created on 30/7/2022 8:34:54</p>
        </div>

    )
}

export default Card;
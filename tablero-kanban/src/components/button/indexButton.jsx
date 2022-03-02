import './styleButton.css'
import React from 'react'
import { useState, useContext } from 'react'
import CardsContext from '../context/indexContext'


// Hay que hacer que cuando no haya texto en el text area el boton verde esté deshabilitado y además con opacidad 0.7.


function Button(props) {

    const [{ cardsState, updateCardsState }, { counter, counterUpdate },{cardsFilter, updateCardsFilter}] = useContext(CardsContext)

    let [isChecked, isCheckedUpdate] = useState(false)
    let [isDisabled, isDisabledUpdate] = useState(true)
    // let [counter, counterUpdate] = useState([])

    const handle = () => {
        isCheckedUpdate(true)
        isDisabledUpdate(true)
    }

    const handleKeyPress = () => {
        isDisabledUpdate(false)
    }

    const date = new Date();
    const hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const handleSubmit = e => {
        e.preventDefault()

        let obj = {
            text: e.target.textarea.value,
            id: counter.length + 1,
            date: date.toLocaleDateString(),
            hour: hour.toString(),
            status: props.status
        }
        counterUpdate(e => e + 1)
        updateCardsFilter([...cardsFilter, obj])
        isCheckedUpdate(false)
        console.log(counter.length)
    }

    const handleCancel = c => {
        isCheckedUpdate(false)
        isDisabledUpdate(false)
    }

    return (


        <React.Fragment>
            <button className="button" onClick={handle}>➕</button>
            {isChecked
                ? <form onSubmit={handleSubmit}>
                    <textarea onKeyUp={handleKeyPress} placeholder='Enter a note' className='text_area' type='textarea' name='textarea' ></textarea>
                    <section>
                        <button disabled={isDisabled} type='submit' className='button_text_area add_button'>Add</button>

                        <button onClick={handleCancel} type='button' className='button_text_area cancel_button'>Cancel</button>
                    </section>
                </form>
                : ''}
        </React.Fragment>)

}

export default Button;
import './styleButton.css'
import React from 'react'
import { useState } from 'react'
import Card from '../card/indexCard'

function Button() {
    let [isChecked, isCheckedUpdate] = useState(false)


    const handle = () => {

        isCheckedUpdate(true)


    }

    const handleSubmit = e => {
        e.preventDefault()
        localStorage.setItem('text', e.target.textarea.value);
        isCheckedUpdate(false)
    }


    return (
        <React.Fragment>
            <button className="button" onClick={handle}>➕</button>
            {isChecked
                ? <form onSubmit={handleSubmit}>
                    <textarea placeholder='Enter a note' className='text_area' type='textarea' name='textarea' ></textarea>
                    <section>
                        <button type='submit' className='button_text_area add_button'>Add</button>
                        <button type='submit' className='button_text_area cancel_button'>Cancel</button>
                    </section>
                </form>
                : ''}
        </React.Fragment>)

}

export default Button;
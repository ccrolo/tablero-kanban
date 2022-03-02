import './styleDone.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext, useState } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress() {
    const [{ cardsState, updateCardsState },{counter, counterUpdate},{doneArr, updateDoneArr}] = useContext(CardsContext)
    const status = 'Done';
    let doneArr2 = cardsState.filter(e => e.status === 'Done')
  
    /* updateDoneArr(cardsState.filter(e => e.status === 'Done'))  */
    const handleClearAll = () => {
        
        /* doneArr = [] */
        /* doneArr.splice(0, doneArr.length)
        updateDoneArr([...doneArr]) */
       
    }

    return (
        <div className="column_container">

            <div className='column_name' >
                <div className='div_counter'>{doneArr2.length}</div>
                <h3>Done</h3>
            </div>
            <button onClick={handleClearAll}>Clear all</button>
            <Button status={status}></Button>

            {doneArr2.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}

        </div>
    )
}

export default ColumnProgress;
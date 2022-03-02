import './styleDone.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext, useState } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress() {
    const [{ cardsState, updateCardsState },{counter, counterUpdate}] = useContext(CardsContext)
    const status = 'Done';
    let doneArr = cardsState.filter(e => e.status === 'Done')
    // const [doneArr, updateDoneArr] = useState([])
    /* updateDoneArr(cardsState.filter(e => e.status === 'Done'))  */
    const handleClearAll = () => {
        /* doneArr = [] */
        /* doneArr.splice(0, doneArr.length)
        updateDoneArr([...doneArr]) */
    }
    return (
        <div className="column_container">
            <div className='column_name' >
                <div className='div_counter'>{doneArr.length}</div>
                <h3>Done</h3>
            </div>
            <button onClick={handleClearAll}>Clear all</button>
            <Button status={status}></Button>
            {doneArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}
        </div>
    )
}

export default ColumnProgress;
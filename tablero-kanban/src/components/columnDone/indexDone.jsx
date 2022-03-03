import './styleDone.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext, useState } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress(props) {
    const [{ cardsState, updateCardsState }, { counter, counterUpdate }, { cardsStateFilter, updateCardsStateFilter }, { file, updateFile }] = useContext(CardsContext)
    const status = 'Done';
    let doneArr = cardsStateFilter.filter(e => e.status === 'Done')
   
    const handleClearAll = () => {

        updateCardsState(cardsState.filter(e => e.status !== 'Done'))
        updateCardsStateFilter(cardsStateFilter.filter(e => e.status !== 'Done'))
        updateFile(file.filter(e => e.status !== 'Done'))

    }
    return (
        <div className="column_container">
            <div className='header__container'>
                <div className='column_name' >
                    <div className='div_counter'>{doneArr.length}</div>
                    <h3>Done</h3>
                </div>
                <button className="button" onClick={handleClearAll}>Clear all</button>
                <Button status={status}></Button>
            </div>

            {doneArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}
        </div>
    )
}

export default ColumnProgress;
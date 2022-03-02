import './styleDone.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress() {
    const [{ cardsState, updateCardsState },{counter, counterUpdate}] = useContext(CardsContext)
    // const { cardsState, updateCardsState } = useContext(CardsContext)
    /*  console.log(cardsState) */
    localStorage.setItem('arrayCards', cardsState);
    const status = 'Done';
    let doneArr = cardsState.filter(e => e.status === 'Done');

    return (
        <div className="column_container">

            <div className='column_name' >
                <div className='div_counter'>{doneArr.length}</div>
                <h3>Done</h3>
            </div>
            <Button status={status}></Button>

            {doneArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}

        </div>
    )
}

export default ColumnProgress;
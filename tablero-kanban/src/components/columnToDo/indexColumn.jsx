import './styleColumn.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function Column() {
    const { cardsState, updateCardsState } = useContext(CardsContext)
    /*  console.log(cardsState) */
    localStorage.setItem('arrayCards', cardsState);
    const status = 'ToDo';
    let toDoArr = cardsState.filter(e => e.status === 'ToDo');


    return (
        <div className="column_container">

            <div className='column_name' >
                <div className='div_counter'>{cardsState.length}</div>
                <h3>To Do</h3>
            </div>
            <Button status={status}></Button>

            {toDoArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}

        </div>
    )
}

export default Column;


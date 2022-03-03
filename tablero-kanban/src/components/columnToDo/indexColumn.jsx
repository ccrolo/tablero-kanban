import './styleColumn.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function Column() {
    const [{ cardsState, updateCardsState },{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter}] = useContext(CardsContext)
    
    
    const status = 'ToDo';
    let toDoArr = cardsStateFilter.filter(e => e.status === 'ToDo');

    return (
        <div className="column_container">
            <div className='column_name' >
                <div className='div_counter'>{toDoArr.length}</div>
                <h3>To Do</h3>
            </div>
            <Button status={status}></Button>
            {toDoArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}
        </div>
    )
}

export default Column;


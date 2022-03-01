import './styleProgres.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress() {
    const { cardsState, updateCardsState } = useContext(CardsContext)
    localStorage.setItem('arrayCards', cardsState);
    const status = 'InProgress';
    let progressArr = cardsState.filter(e => e.status === 'InProgress');

    return (
        <div className="column_container">

            <div className='column_name' >
                <div className='div_counter'>{progressArr.length}</div>
                <h3>In Progress</h3>
            </div>
            <Button status={status}></Button>

            {progressArr.map((e, i) => <Card key={i} status={e.status} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}

        </div>
    )
}

export default ColumnProgress;
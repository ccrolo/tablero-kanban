import './styleProgres.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function ColumnProgress() {
    const [{ cardsState, updateCardsState },{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter},{file, updateFile}] = useContext(CardsContext)
   
    const status = 'InProgress';
    let progressArr = cardsStateFilter.filter(e => e.status === 'InProgress');
    if(progressArr.length===0||file!==0){
        progressArr=cardsStateFilter.filter(e => e.status === 'InProgress')
    }
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
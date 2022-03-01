import './styleProgres.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useContext } from 'react'
import {CardsProgress} from '../context/indexContext'

function ColumnProgress() {
    const { cardsProgress, updateCardsProgress } = useContext(CardsProgress)
    /*  console.log(cardsState) */
    /* localStorage.setItem('arrayCards', cardsState); */
    const checked = false;

   

    return (
        <div className="column_container">
            
                <div className='column_name' >
                    <div className='div_counter'>{cardsProgress.length}</div>
                    <h3>In Progress</h3>
                </div>
                <Button checked={checked}></Button>
           
            {cardsProgress.length === 0 ? '' : cardsProgress.map((e, i) => <Card key={i} checked={e.checked} id={e.id} date={e.date} hour={e.hour} task={e.text}></Card>)}


        </div>
    )
}

export default ColumnProgress;
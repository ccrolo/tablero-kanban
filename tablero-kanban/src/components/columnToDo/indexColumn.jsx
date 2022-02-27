import './styleColumn.css'
import Card from "../card/indexCard"
import Button from "../button/indexButton"
import { useState } from 'react'
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function Column(){
    const {cardsState, updateCardsState} = useContext(CardsContext)
    console.log(cardsState)
    localStorage.setItem('arrayCards', cardsState);

    return (
        <div className="column_container">
            <Button></Button>
            {cardsState.length===0 ? '' : cardsState.map((e,i)=><Card key={i} task={e.text}></Card>)}
            <Card></Card>
            <Card></Card>
            
        </div>
    )
 }

 export default Column;
    

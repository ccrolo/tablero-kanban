import './style.css'
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function Filter(){
    const [{ cardsState, updateCardsState },{counter, counterUpdate},{cardsFilter, updateCardsFilter}] = useContext(CardsContext)
    // const { cardsState, updateCardsState } = useContext(CardsContext)

    const handleFilter = e => {
        console.log(cardsState)
        
        const filteredCard = cardsFilter.filter(c => c.text.toLowerCase().includes(e.target.value.toLowerCase()))
        updateCardsState(filteredCard)
    }

    return(
        <main className="filter__container">
            <div className="filter__info">
                <h5 className='filter__info1'>Version 1.0</h5>
                <h5 className='filter__info2'>Texto dos</h5>
            </div>
            <div className='filter__div__container'>
                <label  className='lupa' htmlFor="">🔍</label>
                <input type="text" className="filter__filter" placeholder="Search" onKeyUp={handleFilter}/>
            </div>
        </main>
    )
}

export default Filter;





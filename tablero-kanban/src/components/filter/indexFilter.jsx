import './style.css'
import { useContext } from 'react'
import CardsContext from '../context/indexContext'

function Filter(){
    let [{ cardsState, updateCardsState },{counter, counterUpdate},{cardsStateFilter, updateCardsStateFilter}] = useContext(CardsContext)

    const handleFilter = e => {
        console.log(cardsStateFilter)
        const filterAll = e.target.value.toLowerCase()
        const filteredCard = cardsState.filter(c => c.text.toLowerCase().includes(filterAll))
        updateCardsStateFilter(filteredCard)
    }

    return(
        <main className="filter__container">
            <div className="filter__info">
                <h5 className='filter__info1'>Version 1.0</h5>
                <h5 className='filter__info2'>Texto dos</h5>
            </div>
            <div className='filter__div__container'>
                <label  className='lupa' htmlFor="">🔍</label>
                <input type="input" className="filter__filter" placeholder="Search" onChange={handleFilter}/>
            </div>
        </main>
    )
}

export default Filter;



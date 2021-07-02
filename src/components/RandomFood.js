import React, { useState, useEffect } from 'react'
import ItemsMenu from './ItemsMenu'
import SearchField from './SearchField'

const RandomFood = ({ filteredData, setFilterData, foodMenu }) => {

    const [randomNumber, setRandomNumber] = useState(0)
    const handleClick = () => {
        if (randomNumber !== 0) {
            const randomize = Math.floor(Math.random() * foodMenu.length)

            return setRandomNumber(randomize)
        }

    }

    return (
        <div>
            {/* <button onClick={handleClick} >Suprise Me !!</button> */}
            {/* <SearchField /> */}
            {/*<ItemsMenu randomNumber={randomNumber} />*/}
        </div>
    )
}

export default RandomFood

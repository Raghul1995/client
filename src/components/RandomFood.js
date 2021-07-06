import React, { useState, useEffect } from 'react'
import ItemsMenu from './ItemsMenu'
import SearchField from './SearchField'

const RandomFood = ({ filteredData, setFilterData, foodMenu }) => {

    const handleClick = () => {

        const randomize = Math.floor(Math.random() * foodMenu.length) + 1
        const randomFood = foodMenu.filter(food => food.id === randomize)
        console.log(randomFood)
        setFilterData(randomFood)
    }

    return (
        <div className="btn-container" >
            <button className="filter-btn" onClick={handleClick} >Suprise Me !!</button>
        </div>
    )
}

export default RandomFood

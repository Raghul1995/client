import React from 'react'

const Test = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((unique, index) => {
                return (
                    <button type="button"  className="filter-btn" key={index} onClick={() => filterItems(unique)}>
                        {unique}
                    </button>
                );
            })}
        </div>
    )
}

export default Test
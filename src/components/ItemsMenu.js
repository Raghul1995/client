import React from 'react';
function ItemsMenu({ filteredData, randomNumber }) {
    return (
        <div className="section-center">
            {filteredData && filteredData.map((menu) => {
                const { id, title, img, price, desc } = menu;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{title} </h4>
                                <h4 className="price">Kr  {price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default ItemsMenu

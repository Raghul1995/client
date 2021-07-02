import React, { useState, useEffect } from "react"
import './App.css';
import Categories from './components/Categories'
import Header from './components/Header'
import SearchField from './components/SearchField'
import RandomFood from './components/RandomFood'


function App() {

  const [foodMenu, setFoodMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilterData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("http://localhost:4000/recipe/");
    const localhost = await response.json()
    setFoodMenu(localhost.menu)
  }

  const filterItems = (category) => {
    if (category === "all") {
      return setFilterData(foodMenu)
    }
    const newItems = foodMenu.filter(menCategory => menCategory.category === category)
    setFilterData(newItems)
  }

  useEffect(() => {
    const uniqCategory = ["all", ...new Set(foodMenu.map(menuList => menuList.category))]
    setCategories(uniqCategory)
  }, [foodMenu])

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <main>
      <div className="menu section">
        <div className="title">
          <Header />
          <SearchField filteredData={filteredData} foodMenu={foodMenu} setFilterData={setFilterData} />
          <Categories categories={categories} filterItems={filterItems} />
          <RandomFood filteredData={filteredData} foodMenu={foodMenu}   />
        </div>
      </div>
    </main>
  );
}

export default App;

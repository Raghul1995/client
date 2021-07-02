import ItemsMenu from './ItemsMenu'

const SearchField = ({ filteredData, foodMenu, setFilterData }) => {

    const handleSearch = (e) => {
        let value = e.target.value;
        let results = [];
        results = foodMenu.filter(data => {
            return data.title.search(value) !== -1;
        });
        setFilterData(results);

    }

    return (
        <div>
            <div className="form">
                <label className='form-label' >Search: </label>
                <input type="text" onChange={(e) => handleSearch(e)} className='formInput' />
            </div>
            <div >
                <ItemsMenu filteredData={filteredData} />
            </div>
        </div>
    )
}

export default SearchField

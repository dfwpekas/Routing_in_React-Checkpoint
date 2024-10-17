import { useState } from "react";

function Filter({onFilter}) {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    function handleFilter() {
        onFilter(title, rating)
    };

    return (
    <div className="filter">
        <input 
        type="text"
        placeholder="filter by text"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}/>
        
        <input 
        type="text" 
        placeholder="filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}/>

        <button onClick={handleFilter}>Filter</button> 
    </div>
)

};


export default Filter;
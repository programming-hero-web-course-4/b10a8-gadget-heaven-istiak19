import './category.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <NavLink to='/' className={({ isActive }) => isActive ? 'btn w-full active-btn mb-4 rounded-full' : 'btn w-full mb-4 rounded-full'}><button>All Products</button></NavLink>
            {
                categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`} className={({ isActive }) => isActive ? 'btn w-full active-btn mb-4 rounded-full' : 'btn w-full mb-4 rounded-full'}><button>{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default Categories;
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
        <div className="">
            <button className="btn w-full mb-4">All Products</button>
            {
                categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`}><button className="btn flex w-full mb-3">{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default Categories;
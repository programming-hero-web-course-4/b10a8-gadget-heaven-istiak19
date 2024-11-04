import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <NavLink><button onClick={() => navigate('/')} className="btn rounded-full w-full mb-4">All Products</button></NavLink>
            {
                categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`}><button className="btn flex w-full mb-3 rounded-full">{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default Categories;
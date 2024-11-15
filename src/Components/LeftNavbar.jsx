import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [category, setcategory] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(rec => rec.json())
        .then(data=> setcategory(data.data.news_category))
    }, [])
   
    
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">All Category({category.length})</h2>
            <div className="flex flex-col gap-2">
                {category.map(c => <NavLink to={`/Catagory/${c.category_id}`} className="border-none text-left btn bg-base-100" key={c.category_id}>{ c.category_name }</NavLink>)}
            </div>
        </div>
    );
};

export default LeftNavbar;
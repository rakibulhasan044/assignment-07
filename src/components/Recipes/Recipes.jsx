import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";





const Recipes = () => {
    const [recipes, setRescipes] = useState([])
    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRescipes(data))
    },[])
    console.log(recipes)
    return (
        <div className="grid grid-cols-2 gap-5">
            {
                recipes.map(item => <Recipe key={item.id} recipe={item}></Recipe>)
            }
        </div>
    );
};

export default Recipes;
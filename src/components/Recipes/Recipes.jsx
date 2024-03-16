import { useEffect, useState } from "react";


const Recipe = () => {
    const [recipes, setRescipes] = useState([])
    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Recipe;
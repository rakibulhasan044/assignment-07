import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ wantToCook }) => {
  const [recipes, setRescipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRescipes(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {recipes.map((item) => (
        <Recipe key={item.id} recipe={item} wantToCook={wantToCook}></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  wantToCook: PropTypes.func,
};

export default Recipes;

import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  const { name, image, description, ingredients, preparing_time, calories } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl p-5 space-y-3">
      <figure className="">
        <img src={image} alt={name} className="rounded-xl mb-3" />
      </figure>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-slate-500 font-medium">
        {description.slice(0, 100)}
      </p>
      <hr />
      <h4 className="text-2xl font-semibold">ingredients: {ingredients.length}</h4>
      <ul className="list-disc text-slate-500 font-medium ">
        {
            ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))
        }

      </ul>
      <hr className="" />
      <div className="flex gap-6">
        <p>{preparing_time} min</p>
        <p>{calories}</p>
      </div>
      <button className="btn bg-green-500 rounded-3xl w-2/4">
        Wannt to cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;

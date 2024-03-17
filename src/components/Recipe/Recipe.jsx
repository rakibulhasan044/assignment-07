import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFireFlameSimple} from '@fortawesome/free-solid-svg-icons'
const Recipe = ({ recipe, wantToCook }) => {
  const { name, image, description, ingredients, preparing_time, calories } =
    recipe;
  return (
    <div className="card bg-base-100 shadow-xl p-5 space-y-3">
      <figure className="">
        <img src={image} alt={name} className="rounded-xl mb-3" />
      </figure>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-slate-500 font-medium">{description.slice(0, 100)}</p>
      <hr />
      <h4 className="text-2xl font-semibold">
        ingredients: {ingredients.length}
      </h4>
      <ul className="list-disc text-slate-500 font-medium ">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.slice(0, 20)}</li>
        ))}
      </ul>
      <hr className="" />
      <div className="flex gap-6 justify-between">
        <p><FontAwesomeIcon className="px-2" icon={faClock}/>      {preparing_time} min</p>
        <p><FontAwesomeIcon className="px-2" icon={faFireFlameSimple}/>{calories} calories</p>
      </div>
      <button
        onClick={() => wantToCook(recipe)}
        className="btn bg-green-500 rounded-3xl w-2/4"
      >
        Want to cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  wantToCook: PropTypes.func,
};

export default Recipe;

import PropTypes from 'prop-types';
const Recipe = ({recipe}) => {
    const {name, image, description, ingradients, preparing_time, calories} = recipe;
  return (
    
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <h3>{name}</h3>
        <p>{description}</p>
        <hr />
        <h4>Ingradient:</h4>
        {
           
        }
        <hr />
        <div className="flex gap-6">
            <p>{preparing_time} min</p>
            <p>{calories}</p>
        </div>
        <button className="btn bg-green-500 rounded-3xl w-2/4">Wannt to cook</button>
      </div>
  );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
}

export default Recipe;

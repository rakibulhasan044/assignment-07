import PropTypes from "prop-types";
const Caart = ({ cook, prepairFood, preparing }) => {
  console.log(cook);

  return (
    <>
      <h3 className="text-3xl font-semibold text-center">
        Want to cook: {cook.length}
      </h3>
      <hr />
      <div className="space-y-5">
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>fffk{cook.name}</th>
              </tr>
            </thead>
            <tbody>
              {cook.map((p, index) => (
                <tr key={p.id}>
                  <th>{index + 1}</th>
                  <td>{p.name}</td>
                  <td>{p.preparing_time} </td>
                  <td>{p.calories}</td>
                  <td>
                    <button
                      onClick={() => prepairFood(p)}
                      className="px-2 py-2 bg-green-500 rounded-3xl"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-3xl font-semibold text-center">
          Want to cook: {preparing.length}
        </h3>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparing.map((p, index) => (
                <tr key={p.id}>
                  <th>{index + 1}</th>
                  <td>{p.name}</td>
                  <td>{p.preparing_time} </td>
                  <td>{p.calories}</td>
                </tr>
              ))}
              <tr>
                <th>{}</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
Caart.propTypes = {
  cook: PropTypes.array,
  preparing: PropTypes.array,
  prepairFood: PropTypes.func,
};

export default Caart;

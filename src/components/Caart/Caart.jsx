import PropTypes from 'prop-types';
const Caart = ({cook}) => {
  console.log(cook)
  return (
    <>
    <h3 className="text-3xl font-semibold text-center">Want to cook: {cook.length}</h3>
      <hr />
    <div className="space-y-5">
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* <tr>
              <th>1</th>
              <td>{cook.name}</td>
              <td>{cook.preparing_time} </td>
              <td>Blue</td>
              <td><button className="px-2 py-2 bg-green-500 rounded-3xl">Preparing</button></td>
            </tr> */}
            {
              cook.map((p, index )=> (
                <tr key={index}>
              <th>{index + 1}</th>
              <td>{p.name}</td>
              <td>{p.preparing_time} </td>
              <td>{p.calories}</td>
              <td><button className="px-2 py-2 bg-green-500 rounded-3xl">Preparing</button></td>
            </tr> 
              ))
            }
            
          </tbody>
        </table>
        
      </div>

      <h3 className="text-3xl font-semibold text-center">Curently cooking:</h3>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Time</td>
              <td>Calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
Caart.propTypes = {
  cook: PropTypes.object
}
export default Caart;

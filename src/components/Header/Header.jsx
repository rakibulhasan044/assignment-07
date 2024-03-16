import Frame from './images/Frame.png'
const Header = () => {
  return (
    <div className="container mx-auto px-3">
      <nav className="">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-2 items-center">
            <input className="bg-slate-200 p-2 rounded-xl w-[120px] md:w-[200px]" type="text" name="" id="" placeholder="Search" />
            <img src={Frame} alt="" />
          </div>
        </div>
      </nav>

      {/* imag section */}
      <div
        className="hero relative py-8 md:py-16 px-2 md:px-8 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(https://img.freepik.com/free-photo/drinks-glasses-new-year-eve-celebration_23-2150901946.jpg?t=st=1710599181~exp=1710602781~hmac=c48a3487148ea280a9160eebd727678c1e07521a046e76b9d8ea957220872c1e&w=900)`,
        }}
      >
        <div className="text-center text-neutral-content w-5/6 md:w-2/3 lg:w-3/5">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
              Discover an exceptional cooking
              
              class tailored for you!
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-5 justify-center">
            <button className="bg-green-500 px-5 py-2 rounded-3xl">
              Explore Now
            </button>
            <button className="px-5 py-2 border-white border-2 bg-transparent text-white rounded-3xl">
              Our Feedback
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

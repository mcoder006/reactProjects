import { NavLink, useNavigate } from 'react-router-dom';
import logo from './../../../assets/image.png'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="h-auto p-4 mx-auto md:w-[50vw] shadow-md shadow-gray-400 w-[90vw] rounded-md">
      <nav className="flex items-center justify-between w-[90%] mx-auto md:w-full">
        <button 
        onClick={() => navigate('/new')}
        className="btn-primary btn btn-sm md:btn-md ">
          Add Ideas +
        </button>
        <h2 className="font-bold text-md md:text-2xl">Idea Master</h2>
          <NavLink to={'/'}>
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </NavLink>
      </nav>
    </header>
  );
}

export default Navbar
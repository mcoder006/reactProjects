import { NavLink } from "react-router-dom"
import "../../index.css"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 text-sm shadow-md md:px-10 shadow-gray-400 md:text-xl">
      <NavLink to={'/'} className="font-bold tracking-wide cursor-pointer">Shoppyphy</NavLink>
      <nav className="space-x-8 md:space-x-10">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/cart'}>Cart</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
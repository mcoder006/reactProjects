// import { useThemeContext } from "../../context/ThemeContext"
import Navbar from "../components/Navbar/Navbar"


const Layout = ({ children, theme } : {children: React.ReactNode, theme: String}) => {
  return (
    <div
    data-theme={theme}
     className="px-4 mx-auto w-90vw">
        <Navbar />
        {children}
    </div>
  )
}

export default Layout
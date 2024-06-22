import ThemeChanger from "../../Themes/ThemeChanger"

const Navbar = () => {
  return (
    <div
    className="flex flex-row-reverse w-full p-4 mx-auto text-xl h-fit"
    >
        <ThemeChanger />
    </div>
  )
}

export default Navbar
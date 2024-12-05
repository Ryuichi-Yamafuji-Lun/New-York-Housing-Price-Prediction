const NavBar = () => {
    return(
        <nav className="w-full flex justify-between items-center px-8 py-2 shadow-md">
            <div className="text-2xl font-bold text-purple-800">NY Home Value Forecast</div>
            <div className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-purple-800">
                About
            </a>
            <a href="#product" className="text-gray-700 hover:text-purple-800">
                Forecast
            </a>
            </div>
        </nav>
    )
}

export default NavBar
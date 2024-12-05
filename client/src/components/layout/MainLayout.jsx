import NavBar from "../Navbar"

const MainLayout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
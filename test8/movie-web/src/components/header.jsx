import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"

const Header = () => {
    return (
        <header className="w-full max-w-6xl px-4 h-[90px] shadow bg-amber-700 shadow-amber-100 rounded-b-lg flex flex-col sm:flex-row justify-between items-center gap-4 max-sm:h-[150px] max-sm:justify-evenly">
            <nav>
                <ul className="flex gap-6">
                    <li><Link className="text-white text-lg sm:text-xl transition-all" to="/">Home</Link></li>
                    <li><Link className="text-white text-lg sm:text-xl" to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
            <Searchbar />
        </header>
    )
}

export default Header
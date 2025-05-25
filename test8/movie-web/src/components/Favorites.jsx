import { useContext } from "react"
import { AuthContext } from "../context/context"
import Header from "./header"
import MovieCard from "./movieCard"

const Favorites = () => {
    const { favorites } = useContext(AuthContext)

    return (
        <div className="bg-amber-950 min-h-screen flex flex-col items-center w-full">
            <Header />
            <div className="grid grid-cols-1 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 w-full max-w-7xl justify-items-center ">
                <MovieCard arr={favorites} />
            </div>
        </div>
    )
}

export default Favorites
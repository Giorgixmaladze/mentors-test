import { useContext } from "react"
import MovieList from "./MovieList"
import Header from "./header"
import { AuthContext } from "../context/context"
import Founded from "./founded"

const Home = () => {
    const { found } = useContext(AuthContext)
    return (
        <div className="w-full min-h-screen bg-amber-950 flex flex-col items-center">
           
                <Header />
                <MovieList />

        </div>
    )
}
export default Home
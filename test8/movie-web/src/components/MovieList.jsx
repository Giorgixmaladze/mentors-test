import { useContext } from "react"
import MovieCard from "./movieCard"
import { AuthContext } from "../context/context"
import Details from "./Details"
import Founded from "./founded"

const MovieList = () =>{
    const {founded,movies,opened } = useContext(AuthContext)
    return(
        founded?(
            <Founded/>
        ):(
        <div className="grid grid-cols-2 gap-[50px] justify-items-center mt-[50px] max-sm:grid-cols-1">
            <MovieCard arr={movies}/>
            {opened &&(
                <Details />
            )}
        </div>
        )
    )
}

export default MovieList
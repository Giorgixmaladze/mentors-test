import { useContext } from "react"
import { AuthContext } from "../context/context"

const Searchbar = () =>{
    const {handleSearch} = useContext(AuthContext)
    return(
        <form onSubmit={handleSearch} className="flex gap-[20px]">
            <input type="text" name="search" placeholder="Search a movie" className="bg-amber-300 placeholder:text-black h-10 w-60 rounded-[5px]  outline-0 pl-[20px]" />
            <button className="bg-white text-black w-20 rounded-[5px]">Search</button>
        </form>
    )
}
export default Searchbar
import { useContext } from "react"
import { AuthContext } from "../context/context"

const Details = () =>{
    const {closeDetails,details,addFavorite} = useContext(AuthContext)

    return(
        <div className="w-screen min-h-screen fixed bg-x top-0 flex items-center justify-center">
            
            <div className="bg-gray-800 w-[700px] h-[600px] flex flex-col items-center justify-evenly">
                <div className="text-white w-10/12 text-4xl cursor-pointer" onClick={closeDetails}>X</div>
                <img className="w-[200px]" src={details.image} alt="" />
                <h2 className="text-white text-xl font-semibold text-center">{details.title}</h2>
                <p className="text-center text-white">{details.description}</p>
            
                <p className="text-white">{details.genre > 1?(details.genre.join(", ")):(details.genre[0])}</p>
               
                 <div className="flex items-center gap-3">
                    <p className="text-white">{details.rating}</p>
                    <span
                        onClick={() => addFavorite(details)}
                        className="material-symbols-outlined cursor-pointer text-xl"
                        style={{ color: details.isfavorite ? "red" : "white" }}
                    >
                        favorite
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Details
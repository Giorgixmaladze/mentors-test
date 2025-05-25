import { useContext } from "react"
import { AuthContext } from "../context/context"


const Founded = () => {
    const { found, addFavorite,goBack } = useContext(AuthContext)
    return (
        
            <div
                
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto flex flex-col items-center justify-between p-4 gap-4 shadow-lg shadow-white rounded-md hover:shadow-2xl transition duration-200 bg-amber-800"
            >
                <button onClick={goBack} className="bg-white text-black w-20 rounded-[5px]" >Go back</button>
                <img className="w-40 h-60 object-cover rounded" src={found.image} alt={found.title} />
                <h2 className="text-white text-xl font-semibold text-center">{found.title}</h2>
                <p className="text-center text-white text-sm">{found.description}</p>
                <div className="flex items-center gap-3">
                    <p className="text-white">{found.rating}</p>
                    <span
                        onClick={() => addFavorite(item)}
                        className="material-symbols-outlined cursor-pointer text-xl"
                        style={{ color: found.isfavorite ? "red" : "white" }}
                    >
                        favorite
                    </span>
                </div>
            </div>

    )
}

export default Founded
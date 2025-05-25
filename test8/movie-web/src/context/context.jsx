import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetch";
import { setLocal } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


const AuthProvider = ({children}) =>{
    const [favorites,setFavorites] = useState([])
    const [movies, setMovies] = useState([])
    const [found,setFound] = useState({})
    const [founded,setFounded] = useState(false)
    const [opened,setOpened] = useState(false)
    const [details,setDetails] = useState({})
    useEffect(() =>{
        const loadMovies = async() =>{
            const data = await fetchData()
            setMovies(data || [])
        }
        loadMovies()

    },[])

    const addFavorite = (item) =>{
 
        item.isfavorite = !item.isfavorite
        const updated = movies.filter((x)=> x.isfavorite === true)
        setFavorites(updated)
        setLocal("favorites",updated)
    }
    console.log(favorites)

    const handleSearch = (e) =>{
        e.preventDefault()
        const index = movies.findIndex(item => item.title.toLowerCase() === e.target.search.value.toLowerCase())
        if(index){
            setFound(movies[index])
            setFounded(true)
        }
    }
    const goBack = () =>{
        setFounded(false)
    }


    console.log(found)
    const openDetails = (index) =>{
        setOpened(true)
        setDetails(movies[index])
    }
    const closeDetails = () =>{
        setOpened(false)
    }
    console.log(details)


    return(
        <AuthContext.Provider value={{movies,addFavorite,favorites,handleSearch,opened,openDetails,closeDetails,details,found,founded,goBack}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
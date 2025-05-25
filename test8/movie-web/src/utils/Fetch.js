const fetchData = async () => {
    try {
        const res = await fetch("../../public/data.json")
        return res.json()
    }catch(err){
        console.error("Error Fetching data")
    }

}   
export {fetchData}
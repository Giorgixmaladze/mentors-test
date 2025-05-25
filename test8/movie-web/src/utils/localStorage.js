const setLocal = (name,item) =>{
    return localStorage.setItem(name,JSON.stringify(item))
}

const getLocal = (name) =>{
    return JSON.parse(localStorage.getItem(name))
}

export {setLocal,getLocal}
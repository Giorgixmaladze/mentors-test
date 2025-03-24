import { use, useEffect, useState } from "react"
import fetchData from "../utils/fetchData"
import { addTask, handleSearch, deleteTasks, editTask } from "../utils/task"
import { Link } from "react-router-dom"
import "../styles/management.css"

const Management = ({ reg, log }) => {
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("Tasks")) || [])
    const [completed, setCompleted] = useState([])
    const [weatherData, setWeatherData] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [editing, setIsEditing] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null);
    const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("curUser")) || [])
    const [signed, setSigned] = reg
    const [logged, setLogged] = log


    useEffect(() => {
        localStorage.setItem("curUser", JSON.stringify(currUser))
    }, [currUser])

    useEffect(() => {
        if (searchItem) {
            fetchData(setWeatherData, searchItem);
        }

    }, [searchItem]);

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(task))
    }, [task])



    const deleteCompleted = (index) => {
        const newCompleted = completed.filter((_, i) => i !== index);
        setCompleted(newCompleted);
        localStorage.setItem("Completed", JSON.stringify(newCompleted));
    };
    const filterTask = (index) => {
        let item = task[index];
        setTask((prev) => prev.filter((_, i) => i !== index));


        if (completed.some(i => i === item)) {
            alert("task already completed")
        } else {
            setCompleted((prev) => [...prev, item]);
            localStorage.setItem("Completed", JSON.stringify(completed))
        }

    };
    const logOut = () => {
        setCurrUser([])
        setLogged(false)
    }


    return (
    
            <div id="parent">
                <div id="crud-section">
                    <h2>Task section</h2>
                    <button id="out" onClick={logOut}><Link to={"/login"}>Log out</Link></button>
                    <form onSubmit={(e) => addTask(e, task, setTask)}>
                        <input type="text" name="task" placeholder="Enter the task" />
                        <button>Add task</button>
                    </form>

                    <div id="tasks">

                        <h2>Tasks</h2>
                        <ul>
                            {task.length > 0 ? (
                                task.map((item, index) => (
                                    <li key={index}>
                                        {editingIndex === index ? (
                                            <form onSubmit={(e) => editTask(e, index,task,setTask,setEditingIndex)}>
                                                <input type="text" name="edited" defaultValue={item} />
                                                <button type="submit">Save</button>
                                                <button type="button" onClick={() => setEditingIndex(null)}>Cancel</button>
                                            </form>
                                        ) : (
                                            <>
                                                {item}
                                                <button onClick={() => setEditingIndex(index)}>Edit</button>
                                                <button onClick={() => deleteTasks(index, task, setTask)}>Delete</button>
                                                <input
                                                className="check"
                                                    type="checkbox"
                                                    checked={completed.includes(item)}
                                                    onChange={() => filterTask(index)}
                                                />
                                            </>
                                        )}
                                    </li>
                                ))
                            ) : (
                                <p>Add a task</p>
                            )}
                        </ul>
                    </div>

                    <div id="completed">
                        <h2>Completed Tasks</h2>
                        <ul>
                            {
                                completed ? (
                                    completed.map((item, index) => {
                                        return (
                                            <li key={index}>{item} <button onClick={() => deleteCompleted(index)}>Delete</button> <input className="check" checked={completed.some(complete => complete === item)} type="checkbox" /></li>
                                        )
                                    })
                                ) : (<p>No completed tasks</p>)
                            }
                        </ul>
                    </div>

                </div>
                            <hr />
                <div id="weather-section">

                    <h2>Weather section</h2>
                    <form onSubmit={(e) => handleSearch(e, setSearchItem)}>
                        <input type="text" placeholder="Enter the city" required name="city" />
                        <button>Search city</button>
                    </form>

                    <div id="weather" >
                        {
                            weatherData.length > 0 ? (
                                <div>
                                    <h3>{weatherData[0].city}</h3>
                                    <h5>{weatherData[0].condition}</h5>
                                    <p>{weatherData[0].description}</p>
                                    <p>{Math.round(weatherData[0].temp)}°C </p>
                                    <img src={weatherData[0].image} />

                                </div>
                            ) : (<p>Enter the city</p>)
                        }


                    </div>
                </div>

            </div>
        
    )
}

export default Management
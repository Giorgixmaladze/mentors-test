const handleSearch = (e,setSearchItem) => {
    e.preventDefault()
    setSearchItem(e.target.city.value)
    console.log(weatherData)

}



const addTask = (e,task,setTask) => {
    e.preventDefault()

    if (task.some(item => item === e.target.task.value)) {
        alert("This task already added")
    } else {
        setTask(prev => [...prev, e.target.task.value])

    }


}


const deleteTasks = (index,task,setTask) => {
        
    const updatedTasks = task.filter((_, i) => i !== index);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks)); // Store as JSON
    setTask(updatedTasks)

};

const editTask = (e, index,task,setTask,setEditingIndex) => {
    e.preventDefault();
    let tasks = [...task];
    const updatedValue = e.target.edited.value


    tasks[index] = updatedValue;
    setTask(tasks);
    setEditingIndex(null);
};



export {handleSearch,addTask,deleteTasks,editTask}
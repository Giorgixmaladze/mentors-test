// const key = `61deb0ccf0dc931eeb1e8d6de62c7f8b`
// if(searchItem.length > 0){
//    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&appid=${key}&units=metric`)

const fetchData = (setWeatherData, city) => {
    const key = `61deb0ccf0dc931eeb1e8d6de62c7f8b`;

    if (city.length > 0) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod !== 200) {
                    alert("City not found!");
                    return;
                }
                setWeatherData([
                    {
                        city: data.name,
                        condition: data.weather[0].main,
                        description: data.weather[0].description,
                        image: data.weather[0].icon,
                        temp: data.main.temp
                    }
                ]);
            })
            .catch(err => console.error("Error fetching data:", err));
    }
};





export default fetchData

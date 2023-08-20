
const apiKey = 'e1f92fc98ebc2d2ef05ab8e169bbbc55'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchBox = document.querySelector("#input");
const searchBtn = document.querySelector("#btn");
const weatherImg = document.querySelector(".weather-icon")

const WeatherData = async (city) => {
    // console.log(city);
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

        setTimeout(() => {
            document.querySelector(".error").style.display = "none";
        }, 3000)
    } else {
        const data = await res.json();

        // console.log(data)

        if (data.main != null) {
            const cityName = document.querySelector(".city").innerHTML = data.name;

            const temp = document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

            const humidity = document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

            const wind = document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds") {
                weatherImg.src = './images/clouds.png'
            } else if (data.weather[0].main == "Rain") {
                weatherImg.src = './images/rain.png'
            } else if (data.weather[0].main == "Mist") {
                weatherImg.src = './images/mist.png'
            } else if (data.weather[0].main == "Clear") {
                weatherImg.src = './images/clear.png'
            } else if (data.weather[0].main == "Drizzle") {
                weatherImg.src = './images/drizzle.png'
            }

            document.querySelector(".weather").style.display = "block";
        }
    }
}

const searchData = () => {

    WeatherData(searchBox.value);
}
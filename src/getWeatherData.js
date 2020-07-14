// console.log('err');
// const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=2874e0623c8807994e18916c8cd78f21`;
// const wetherData = fetch(weatherApi, { mode: "cors" })
//     .then(response => response.json())
//     .then(response => console.log(response.weather))
//     .catch(e => {
//         console.log(e)
//     })

// const container = document.getElementById('main-container')

// async function getCats() {
//     try {
//         const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', { mode: 'cors' });
//         const catData = await response.json();
//         const img = document.createElement('img');
//         img.src = catData.data.images.original.url;
//         container.appendChild(img);
//     } catch (err) {
//         console.log(err)
//     }
// }

// import displayBody from './body'

// displayBody();

const weatherInfo = async () => {
    try {
        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=2874e0623c8807994e18916c8cd78f21`;
        const response = await fetch(weatherApi, { mode: "cors" });
        const data = await response.json();

        const displayContent = document.querySelector('.display-content');
        const searchForm = document.querySelector('#search-form');
        const searchInput = document.querySelector('#search-input');
        const searchBtn = document.querySelector('#search-btn');

        const renderData = document.querySelector('.renderData');
        const city = document.querySelector('#city');
        const currentWeather = document.querySelector('#current-weather');
        const temp = document.querySelector('#temp');
        // const tempbtn = document.createElement('button')
        // tempbtn.setAttribute('type', 'button');
        // tempbtn.textContent = 'Change to F'
        const feels = document.querySelector('#feels-like');
        const humidity = document.querySelector('#humidity');
        const wind = document.querySelector('#wind');
        const windDirection = document.querySelector('#wind-direction');

        // console.log(data);

        city.innerHTML = `City: ${data.name} ${data.sys.country}`
        currentWeather.innerHTML = `Current Weather: ${data.weather[0].main}`
        let tempInKelvin = data.main.temp;
        // temp.innerHTML = `Temperature: ${Math.floor(tempInKelvin + -273.15)} `
        feels.innerHTML = `Feels: ${data.main.feels_like}`
        humidity.innerHTML = `humidity: ${data.main.humidity}`
        wind.innerHTML = `Wind Speed: ${data.wind.speed}`
        windDirection.innerHTML = `Wind Direction: ${data.wind.deg}`

        const btn = document.querySelector('#toggleBtn');
        btn.addEventListener('click', function () {
            // if (a) {
            //     temp.style.display = "block";
            //     temp.innerHTML = `Temperature: ${Math.floor(((tempInKelvin - 273.15) * 9) / 5 + 32)} `
            // } else {
            //     temp.style.display = "none";
            //     temp.innerHTML = `Temperature: ${Math.floor(tempInKelvin + -273.15)} `
            // }
            // const convertToCelsius = tempInKelvin => Math.floor(tempInKelvin + -273.15);
            // const convertToFahrenheit = tempInKelvin => Math.floor(((tempInKelvin - 273.15) * 9) / 5 + 32);
            // let celsius = () => {
            //     tempInKelvin = Math.floor(tempInKelvin + -273.15);
            //     return tempInKelvin;
            // }
            // convertToCelsius()
            // celsius();

            //     if (temp.innerHTML = `Temperature: ${tempInKelvin} `) {
            //         // console.log(data);
            //         // temp.innerHTML = `Temperature: ${data.main.temp} `
            //         temp.style.display = "block";
            //     } else {
            //         temp.style.display = "none";
            //     }
            console.log('here')
        })

    } catch (err) {
        console.log(err);
    }
}

export default weatherInfo;
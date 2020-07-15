const weatherInfo = async (info) => {
  try {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${info}&APPID=2874e0623c8807994e18916c8cd78f21`;
    const response = await fetch(weatherApi, { mode: 'cors' });
    const data = await response.json();
    const city = document.querySelector('#city');
    const currentWeather = document.querySelector('#current-weather');
    const tempInCelius = document.querySelector('#tempInCelius');
    const tempInFahrenheit = document.querySelector('#tempInFahrenheit');
    tempInFahrenheit.style.display = 'none';
    const feels = document.querySelector('#feels-like');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const windDirection = document.querySelector('#wind-direction');

    city.innerHTML = `City: ${data.name} ${data.sys.country}`;
    currentWeather.innerHTML = `Current Weather: ${data.weather[0].main}`;
    const tempInKelvin = data.main.temp;
    tempInCelius.innerHTML = `${Math.floor(tempInKelvin + -273.15)} C`;
    tempInFahrenheit.innerHTML = `${Math.floor(((tempInKelvin - 273.15) * 9) / 5 + 32)} F`;
    feels.innerHTML = `Feels: ${data.main.feels_like}`;
    humidity.innerHTML = `humidity: ${data.main.humidity}`;
    wind.innerHTML = `Wind Speed: ${data.wind.speed}`;
    windDirection.innerHTML = `Wind Direction: ${data.wind.deg}`;

    const btn1 = document.querySelector('#toggleBtnF');
    const btn2 = document.querySelector('#toggleBtnC');
    btn2.style.display = 'none';

    btn1.addEventListener('click', () => {
      tempInCelius.style.display = 'none';
      tempInFahrenheit.style.display = 'block';
      btn1.style.display = 'none';
      btn2.style.display = 'block';
    });

    btn2.addEventListener('click', () => {
      tempInCelius.style.display = 'block';
      tempInFahrenheit.style.display = 'none';
      btn1.style.display = 'block';
      btn2.style.display = 'none';
    });
  } catch (err) {
    // console.log(err);
  }
};

export default weatherInfo;
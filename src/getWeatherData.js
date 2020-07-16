const weatherInfo = async (info) => {
  try {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${info}&APPID=2874e0623c8807994e18916c8cd78f21`;
    const response = await fetch(weatherApi, { mode: 'cors' });
    const data = await response.json();
    const city = document.querySelector('#city');
    const currentWeather = document.querySelector('#current-weather');
    const feels = document.querySelector('#feels-like');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const windDirection = document.querySelector('#wind-direction');

    city.innerHTML = `City: ${data.name} ${data.sys.country}`;
    currentWeather.innerHTML = `Current Weather: ${data.weather[0].main}`;
    feels.innerHTML = `Feels: ${data.main.feels_like}`;
    humidity.innerHTML = `humidity: ${data.main.humidity}`;
    wind.innerHTML = `Wind Speed: ${data.wind.speed}`;
    windDirection.innerHTML = `Wind Direction: ${data.wind.deg}`;

    const body = document.querySelector('body');
    // render background
    if (data.weather[0].main.toLowerCase() === 'clouds') {
      body.style.backgroundImage = 'url(https://res.cloudinary.com/elijjaaahhhh/image/upload/v1594821934/marcel-oliveira-huqp0k2z9ww-unsplash_jyhb29.jpg)';
    } else if (data.weather[0].main.toLowerCase() === 'drizzle') {
      body.style.backgroundImage = 'url(https://res.cloudinary.com/elijjaaahhhh/image/upload/v1594820961/anna-king-rNBaaxyeWWM-unsplash_bdnhkc.jpg)';
    } else if (data.weather[0].main.toLowerCase() === 'rain') {
      body.style.backgroundImage = 'url(https://www.sciencenews.org/wp-content/uploads/2018/11/112718_KP_rainfall_feat.jpg)';
    } else if (data.weather[0].main.toLowerCase() === 'thunderstorm') {
      body.style.backgroundImage = 'url(https://www.stormgeo.com/assets/ArticleImages/thunderstorm-flipped__FocusFillWzQyODgsMjcwMCwieSIsNzRd.jpg)';
    } else if (data.weather[0].main.toLowerCase() === 'snow') {
      body.style.backgroundImage = 'url(https://www.washingtonpost.com/resizer/ZVTyknssC3yXxy2zWKyvRXkJA0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OMPC2AQTQEI6VESMWNGQTO6JJA.jpg)';
    } else if (data.weather[0].main.toLowerCase() === 'mist' || data.weather[0].main.toLowerCase() === 'haze') {
      body.style.backgroundImage = 'url(https://res.cloudinary.com/elijjaaahhhh/image/upload/v1594820553/peter-oslanec-AsTuH7M7ImY-unsplash_nwoszd.jpg)';
    } else {
      body.style.backgroundImage = 'url(https://www.queenelizabethparkuganda.com/wp-content/uploads/2019/03/placeholder_thumb_1152x648.jpg)';
    }

    const btn = document.querySelector('.celsius');
    btn.textContent = 'Change to Fahrenheit';
    const x = document.querySelector('.temp');
    const tempInKelvin = data.main.temp;
    x.textContent = `${Math.floor(tempInKelvin + -273.15)} °C`;

    const toggle = () => {
      if (btn.classList.contains('celsius')) {
        x.textContent = `${Math.floor(((tempInKelvin - 273.15) * 9) / 5 + 32)} °F`;
        btn.textContent = 'Change to Celsius';
        btn.classList.remove('celsius');
      } else {
        x.textContent = `${Math.floor(tempInKelvin + -273.15)} °C`;
        btn.textContent = 'Change to Fahrenheit';
        btn.classList.add('celsius');
      }
    };

    btn.addEventListener('click', () => {
      toggle();
    });
  } catch (error) {
    const err = document.createElement('p');
    err.setAttribute('class', 'err');
    err.innerHTML = 'Enter a valid city';
  }
};

export default weatherInfo;
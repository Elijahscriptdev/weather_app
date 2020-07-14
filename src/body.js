const displayBody = () => {
  const body = document.querySelector('#main-container')
  body.innerHTML = `
    <nav class="title-text">
        <h1>Weather App</h1>
        <p class="hero-text">search for the latest weather information from cities around the world </p>
    </nav>

    <main class="display-content">

        <form action="" id="search-form">
            <input type="text" placeholder="Enter your city..." name="searchInput" id="search-input">
            <button id="search-btn">Search</button>
        </form>

        <div class='renderData'>
            <p id='city'>p</p>
            <p id='current-weather'>p</p>
            <p id='tempInCelius'>p</p>
            <p id='tempInFahrenheit'>p</p>
            <button id='toggleBtn'>Change to F</button>
            <p id='feels-like'>p</p>
            <p id='humidity'>p</p>
            <p id='wind'>p</p>
            <p id='wind-direction'>p</p>
        </div>

    </main>
`
}

export default displayBody;

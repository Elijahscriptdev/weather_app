const displayBody = () => {
  const body = document.querySelector('#main-container')
  body.innerHTML = `
    <nav class="title-text">
        <h1>Weather App</h1>
        <p class="hero-text">search for the latest weather information from cities around the world </p>
    </nav>

    <main class="displayContent">

        <form action="" id="search-form">
            <input type="text" placeholder="Enter your city..." name="searchInput" id="search-input">
            <button id="search-btn">Search</button>
        </form>

        <div class='renderData'>

        </div>



    </main>
`
}

export default displayBody

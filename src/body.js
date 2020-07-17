const displayBody = () => {
  const body = document.querySelector('#main-container');
  body.innerHTML = `
    <nav class="title-text">
        <h1>Weather App</h1>
        <p class="hero-text">Search for the latest weather information from cities around the world </p>
    </nav>

    <main class="display-content">
        <div class="searchinput">
            <form action="" id="search-form">
                <input type="text" placeholder="Enter your city..." name="searchInput" class="text"  id="search-input" required>
                <button type='button' id="search-btn" class="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>

        <div class='renderData'>
            <p id='city'></p>
            <p id='current-weather'></p>
            <p class='temp'></p>
            <button id='toggleBtn' class='celsius'></button>
            <p id='feels-like'></p>
            <p id='humidity'></p>
            <p id='wind'></p>
            <p id='wind-direction'></p>
        </div>

    </main>

    <footer class="footer">
        <a href="mailto:elijjaaahhhh@gmail.com" class="footer-link">
            elijjaaahhhh@gmail.com
        </a>
        <ul class="social-list">
            <li class="social-list-item">
                <!-- <a href="" class="social-list-link"></a> -->
                <a href="https://github.com/Elijahscriptdev" class="social-list-link"><i class="fab fa-github"></i></a>
            </li>
            <li class="social-list-item">
                <!-- <a href="" class="social-list-link"></a> -->
                <a href="https://twitter.com/ElijahObominuru" class="social-list-link"><i class="fab fa-twitter-square"></i></a>
            </li>
            <li class="social-list-item">
                <!-- <a href="" class="social-list-link"></a> -->
                <a href="https://www.linkedin.com/in/elijah-obominuru-0b730b143/" class="social-list-link"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="social-list-item">
                <!-- <a href="" class="social-list-link"></a> -->
                <a href="https://www.instagram.com/elijjaaahhhh/" class="social-list-link"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
    </footer>
`;
};

export default displayBody;

import weatherInfo from './getWeatherData';

const searchBar = () => {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const info = document.getElementById('search-input').value;
    weatherInfo(info);
  });
};
export default searchBar;

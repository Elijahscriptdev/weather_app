import weatherInfo from './getWeatherData';

const searchBar = () => {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.setAttribute('type', 'button');
  searchBtn.addEventListener('click', () => {
    const info = document.getElementById('search-input').value;
    weatherInfo(info);
  });
};
export default searchBar;

// const renderSearch = () => {
//     const main = document.getElementById('main-container');
//     const form = document.createElement('div');
//     form.setAttribute('id', 'search-bar');
//     form.classList.add('md-form', 'active-pink', 'active-pink-2');
//     const input = document.createElement('input');
//     input.setAttribute('class', 'form-control');
//     input.setAttribute('id', 'fname');
//     input.setAttribute('type', 'text');
//     input.setAttribute('aria-label', 'Search');
//     input.setAttribute('placeholder', 'Type city name');
//     input.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             const info = document.getElementById('fname').value;
//             renderData(info);
//         }
//     });

//     form.appendChild(input);
//     main.appendChild(form);
// };
// export default renderSearch;

import weatherInfo from './getWeatherData'

const searchBar = () => {
    // const input = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () =>  {
        
        const info = document.getElementById('search-input').value;
        console.log(info);
        // weatherInfo(info);

    })
}
export default searchBar;


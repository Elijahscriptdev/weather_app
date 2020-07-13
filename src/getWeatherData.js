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

const weatherInfo = async () => {
    try {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=2874e0623c8807994e18916c8cd78f21`;
        const response = await fetch(weatherApi, { mode: "cors" });
    const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

export default weatherInfo;
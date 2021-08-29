const nameInput = document.querySelector('.name-input');
const searchBtn = document.querySelector('.search_btn');
const weatherImg = document.querySelector('.weather-img');
const cityName = document.querySelector('.city-Name');
const countryName = document.querySelector('.weather-country');
const weatherTemp = document.querySelector('.weather-deg');
const weatherType = document.querySelector('.weather-name');
const weatherContainer = document.querySelector('.weather-status');

searchBtn.addEventListener('click', function () {
    const searchValue = nameInput.value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=3036efb8c39cd4aa730b7d06ab164826`
    )
        .then((res) => res.json())
        .then((data) => displayData(data));
});

function displayData(dataCityName) {
    weatherImg.src = `https://openweathermap.org/img/wn/${dataCityName.weather[0].icon}@2x.png`;
    cityName.innerText = `${dataCityName.name}`;
    weatherTemp.textContent = `${dataCityName.wind.deg}`;
    countryName.textContent = `${dataCityName.sys.country}`;
    weatherType.textContent = `${dataCityName.weather[0].main}`;
}

fetch('https://student-tracker-web-api-1.azurewebsites.net/WeatherForecast')
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(Forcast =>{
    const markup = `<li>${Forcast.temperatureC}</li>`;

    document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    }); 
})
.catch(error => console.log(error));
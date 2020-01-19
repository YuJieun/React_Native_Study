const weather = document.querySelector(".js-weather");
const API_KEY = "..";
const COORDS = 'coords';

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json() //서버로부터 데이터가 들어오길 기다리고 실행
    }).then(function(json){
        const temperature = json.main.temp; //리턴이 완료되기까지 기다리고 실행
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const coordsObj = {
        latitude: lati,
        longitude: longi
    };
    saveCoords(coordsObj);
    getWeather(lati,longi);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();

const clockContainer = document.querySelector(".js-clock"),
   clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); //Date는 클래스
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${
        minutes <10 ? `0${minutes}` : minutes}:${
        seconds< 10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    //현재 시간 얻기
    getTime();
    setInterval(getTime,1000); //매초
}

init();

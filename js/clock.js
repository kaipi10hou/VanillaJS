const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();//로딩되자마자 한번 실행되도록 getClock()을 호출. 안그러면 00:00:00으로 초기화가 보이기 때문
setInterval(getClock, 1000);


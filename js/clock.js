const clock=document.querySelector("h2#clock");
getClock();
setInterval(getClock, 1000);

function getClock(){
    const date=new Date();
    let hours=String(date.getHours()).padStart(2,"0");
    let minutes=String(date.getMinutes()).padStart(2,"0");
    let seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
}


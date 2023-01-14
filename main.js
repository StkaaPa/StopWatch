let starter = document.querySelector(".start");
let stoper = document.querySelector(".stop");
let restart = document.querySelector(".reset");
let hrs = document.querySelector(".hour");
let mins = document.querySelector(".minute");
let sec = document.querySelector(".second");
let hour = 0;
let minutes = 0;
let seconds = 0;

let interval;

starter.addEventListener("click", function() {
    interval = setInterval(function() {
        if(seconds < 59) {
            seconds += 1;
            //* Caso os segundos sejam menor que 10
            sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        } else {
            seconds = 0;
            sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
            if(minutes < 59){
                minutes += 1;
                //* Caso os minutos sejam menor que 10
                mins.innerHTML = minutes < 10 ? " 0" + minutes + ':' : minutes + ':';
            } else {
                hour += 1;
                //* Caso a hora seja menor que 10
                hrs.innerHTML = hour < 10 ? " 0" + hour + ':' : hour + ':';
            }
        }
    }, 1000);

    starter.style.pointerEvents = "none";
});

stoper.addEventListener("click", function() {
    clearInterval(interval);
    starter.style.pointerEvents = "visible";
});

restart.addEventListener("click", function() {
    location.reload();
})
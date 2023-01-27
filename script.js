let [second , minutes, hours] = [0,0,0];
let displayTime = document.getElementById("display");

let timer = null;

function stopWatch(){
    second++;

    if( second == 60 ){
        second = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    //displayTime.innerHTML = hours + ':' + minutes + ':' + 0 +second;

    let h = hours < 10 ? "0"+hours : hours; 
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = second < 10 ? "0"+second : second;

    displayTime.innerHTML = `${h} : ${m} : ${s}`;
}

function start(){
    if(timer != 0){
        clearInterval(timer);
    }
    displayTime.classList.add("big");
    timer = setInterval(stopWatch,1000);
}

function stop(){
    
    clearInterval(timer);
    
}

function reset(){
    displayTime.classList.remove("big");
    clearInterval(timer); 
    [second , minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00 : 00 : 00";
}
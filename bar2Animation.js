let number2 = document.getElementById('number2');
let counter2 = 0;

setInterval(() => {
    if(counter2 == 68){
        clearInterval;
    }else{
        counter2 += 1;
        number.innerHTML = `${counter2}%`;
    }
}, 30)
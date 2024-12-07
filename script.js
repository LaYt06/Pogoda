/* import { arraySum } from "./src/main.js";
let array = [2, 5, 1, 10]
console.log(arraySum(array))

import { arrayCut } from "./src/second.js";
console.log(arrayCut('hello my friend')) */


/* import { logs } from "./src/main.js";

let nameLog = document.querySelector('.nameInp')
let emailLog = document.querySelector('.emailInp')
let mesLog = document.querySelector('.messagInp')
let button = document.querySelector('.okBut')

button.addEventListener('click', function () {
    let nameV = nameLog.value
    let emailV = emailLog.value
    let mesV = mesLog.value



    if (nameV === "" || emailV === "" || mesV === "") {
        alert("Holy shit, what are u doing?")
    }
    else {
        console.log(logs(nameV, emailV, mesV))
    }
})
 */



/* 
let obj = [
    {
        name: "yarik",
        age: "17",
        grade: "3P" 
    },
    {
        name: "Oleg",
        age: "15",
        grade: "9" 
    },
    {
        name: "Venia",
        age: "13",
        grade: "7" 
    }
]

let object = JSON.stringify(obj)
console.log(object) */




/* localStorage.setItem('object', JSON.stringify(object))
let saveObj = localStorage.getItem('object')
let parseSo = JSON.parse(saveObj)
console.log(parseSo)
 */

/* 
function objectToLokalStoreg(key,object){
    try{
        let toStoreg = JSON.stringify(object)
        localStorage.setItem(key,toStoreg)   
        console.log('ready')
    }
    catch(error){
        console.error('hren')
    }
}

let obj2 = {
    name:'baton',
    age:100,
}
 */
/* objectToLokalStoreg("tvar",obj2)

function getObject(key) {
    let getData = localStorage.getItem(key)
    if (getData) {
        try {
            return JSON.parse(getData)
        }
        catch(error) {
            console.error('erroooor')
        }
    }
    return null
}


console.log(getObject("tvar"))


function removeObject(key) {
    let removeData = localStorage.removeItem(key)
    return removeData
}

function clearserv(key) {
    let clearData = localStorage.clear(key)
    return clearData
}


function returnData(key) {
    let elemSum = localStorage.length(key)
    return elemSum
}
removeObject('tvar')
console.log(returnData('tvar')) */



/* 
function getKeys() {
    let keys = ['ooo', 'tvar', 'fdfp'];
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i))
    }
    return keys;
}


let arrKey = getKeys()
console.log(arrKey) */





/* 28.09.2024 */

/* 
let area = document.querySelector('.text')

area.addEventListener('input', function(){
    localStorage.setItem('ww', area.value)
})

area.value = localStorage.getItem('ww') */


/* 
let forName = document.querySelector('.name')
let forEmail = document.querySelector('.email')
let forComentari = document.querySelector('.com')

function localStoragekeys(){
    localStorage.setItem('name',forName.value)
    localStorage.setItem('email',forEmail.value)
    localStorage.setItem('comentarii',forComentari.value)
}

forName.value = localStorage.getItem('name')
forName.addEventListener('input', localStoragekeys)


forEmail.value = localStorage.getItem('email')
forEmail.addEventListener('input', localStoragekeys)


forComentari.value = localStorage.getItem('comentarii')
forComentari.addEventListener('input', localStoragekeys)
 */


/* let cont = document.querySelector('.container') 
let images = document.querySelector('.img')
let list = document.querySelector('.list')
cont.addEventListener('click', function(event) {
    let createLi = document.createElement('li')
    createLi.textContent = 'Why?'
}) */






/* 05.10.2024 dz */
/* 
 
let ul = document.querySelector('.list')
let checkBoxes = ul.querySelectorAll('input[type="Checkbox"]')

checkBoxes.forEach((elem, index) => {
    elem.addEventListener('change', function() {
        let arry = []
        for (let i = 0; i < checkBoxes.length; i++) {
            arry.push(checkBoxes[i].checked)
        }
        localStorage.setItem('bobr', JSON.stringify(arry))
    })
})
let y = JSON.parse(localStorage.getItem('bobr'))




let intEm = document.querySelector('.intEm')
let intPas = document.querySelector('.intPas')
let btnCheck =document.querySelector('.btnChack')


let retext = localStorage.getItem('email')
    if(retext){
        intEm.value = retext
    }

    let rePas = localStorage.getItem('password')
    if(rePas){
        intPas.value = rePas
    }

btnCheck.addEventListener('click' , function(){
    localStorage.setItem('email', intEm.value)
    localStorage.setItem('password', intPas.value)
}) 
 */

/* 05.10.2024 */


/* 
let x = 0
function func() {
    x++
    document.body.textContent = x;

    setTimeout(func, 1000)
}
setTimeout(func, 1000)    */
    



/* 
let box = document.querySelector('.col');
let colors = [  
    "red",  
    "green",  
    "blue",  
    "yellow",  
    "orange",  
    "purple",  
    "pink",  
    "cyan",  
    "magenta",  
    "green"  
];
let colorIndex = 0; // Индекс текущего цвета

function changeColor() {
    // Получаем текущий цвет по индексу и увеличиваем индекс
    let color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Возвращаемся к началу списка
    return color;
}

setInterval(() => {
    box.style.backgroundColor = changeColor();
}, 1000);
 */


/* 12.10.2024 */


/* 
let count = 0
let intervalId = setInterval(() => {
    count++
    console.log(`message ${count}`)
    if (count === 5) {
        clearInterval(intervalId)
        console.log('GG.')
    }
}, 1000)

 */































/* 
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;
let timerInterval;

let timeDisplay = document.querySelector('.timer');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    
    displayTime();
}

function displayTime() {
    let displayHours;
    let displayMinutes;
    let displaySeconds;
    let displayMilliseconds;


    if (hours < 10) {
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }


    if (minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }


    if (seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }


    if (milliseconds < 10) {
        displayMilliseconds = "00" + milliseconds;
    } else if (milliseconds < 100) {
        displayMilliseconds = "0" + milliseconds;
    } else {
        displayMilliseconds = milliseconds;
    }


    timeDisplay.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds + "." + displayMilliseconds;
}


startButton.addEventListener('click', () => {
    if (!isRunning) {
        timeDisplay.style.color = 'rgb(209, 43, 43)'
        timeDisplay.style.transition = '30s'
        timerInterval = setInterval(updateTime)
        isRunning = true
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        timeDisplay.style.color = 'rgb(255, 255, 255)'
        timeDisplay.style.transition = '0s'
        clearInterval(timerInterval)
        isRunning = false
    }
});

resetButton.addEventListener('click', () => {

    timeDisplay.style.color = 'rgb(255, 255, 255)'
    timeDisplay.style.transition = '0s'


    clearInterval(timerInterval);

    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0

    displayTime()
    isRunning = false

});

 */




















/* 
let minutes = 60;
let seconds = 0;
let timerInterval;

let timeDisplay = document.querySelector('.timer');
let startButton = document.querySelector('.start');

function updateTime() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timerInterval)
            alert("Stop")
            return;
        }
        minutes--
        seconds = 59;
    } else {
        seconds--
    }

    if (minutes === 30 && seconds === 0) {
        alert("half time")
    }

    displayTime();
}

function displayTime() {
    let dMin;
    let dSec;

    if (minutes < 10) {
        dMin = "0" + minutes;
    } else {
        dMin = minutes;
    }

    if (seconds < 10) {
        dSec = "0" + seconds;
    } else {
        dSec = seconds;
    }

    timeDisplay.textContent = dMin + ":" + dSec
}

startButton.addEventListener('click', function() {
    timerInterval = setInterval(updateTime, 1000)
});



 */

/* let chas = new Date()
console.log(chas)

let time = Date.now()
console.log(time) */

/* setInterval(() => {
    let time = new Date()
    document.body.textContent = time
}, 1000); */

/* setInterval(() => {
    let timee = Date.now()
    document.body.textContent = timee
}, 10);
 */



/* 

setInterval(() => {
    let sdszsd = new Date()

    let future = new Date(2077, 2, 27, 11, 25, 24, 10)
    let update = new Date(future.getTime()+sdszsd.getTime())
    
    let year = future.getFullYear()
    let month = future.getMonth()
    let day = future.getDate()

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let sec = new Date().getSeconds();

    if (sec < 10) {
        document.body.textContent = day + '.' + '0'+month + '.' + year + ' | ' + hours + ':' + minutes + ':' + '0' + sec
    }
    else {
        document.body.textContent = day + '.' + '0'+month + '.' + year + ' | ' + hours + ':' + minutes + ':' + sec
    }
    

    if (sec === 30) {
        document.style.body.color = 'white'
        document.style.body.transition = '5s'
    }



}, 10);
 */
















/* 
let timer = document.getElementById('timer-1')

let nowDate = new Date('Jun 20, 2020')
function timeOut(days, hours, mins, secs) {
    document.getElementById('days').textContent = days
    document.getElementById('hours').textContent = hours
    document.getElementById('mins').textContent = mins
    document.getElementById('secs').textContent = secs
}

timeOut(0, 0, 0, 0)
let interval = setInterval(() => {
    let time = new Date()
    let timeTwo = time - nowDate
    if (timeTwo >= 0) {
        let days = (timeTwo / (1000 * 60 * 60 * 24))
        let hours = (timeTwo / (1000 * 60 * 60) % 24)
        let mins = (timeTwo / (1000 * 60) % 60)
        let secs = (timeTwo / 1000 % 60)
        timeOut(Math.floor(days), Math.floor(hours), Math.floor(mins), Math.floor(secs),)
    }
    else {
        clearInterval(interval)
    }
}, 1000) */






/* 


let countSMS = 0
let interval = setInterval(() => {
    alert('Now')
    countSMS++
    if(countSMS >= 5) {
        clearInterval(interval)
        alert('Bye')
    }
}, 10); 



let kwadrat = document.querySelector('.square')

setInterval(() => {
    kwadrat.style.backgroundColor = 'red'
    kwadrat.style.width = '120px'
    kwadrat.style.transform = `translateX(20px)`
}, 1000); 




let boxClick = document.querySelector('.box')
let scoreNumber = document.querySelector('.score')
let startButton = document.querySelector('.button')
let clicksNumber = 0
boxClick.addEventListener('click', function(){
    clicksNumber++
    scoreNumber.textContent = clicksNumber
})
function startGame(){
    let gameTime = 5
    let timeInterval = setInterval(() => {
        gameTime--;
        if(gameTime <= 0){
            clearInterval(timeInterval)
            alert('Гра закінчена')
            clicksNumber = 0
        }
    }, 1000);
}
startButton.addEventListener('click', startGame)

 */















/* 

let obj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Стан який ми очікуємо'))
        reject(console.log('Стан який привів до помилки'))
    }, 1000);
}) 
.then(value => {
    console.log(value)
}) 
.catch(error => {
    console.log(error)
})

let success = false
let obj2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(success) {
            resolve(console.log('Стан який ми очікуємо'))
        }
        else {
            reject(console.log('Стан який привів до помилки'))
        }
    }, 1000);
})
.then(value => {
    console.log(value)
}) 
.catch(error => {
    console.log(error)
}) */



/* 
function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('виконалось через 3 секунди')); */




/* 
function solve(arr) {
    let obj = new Promise((resolve, reject) => {
        let arrNums = arr.every(num => num % 2 === 0)
        if (arrNums) {
            resolve('Всі числа парні')
        }
        else {
            reject("Є непарні числа")
        }
    })
    return obj
}
solve([2, 8, 15]).then(value => {
    console.log(value)
}) 
.catch(error => {
    console.log(error)
})
 */

/* 

function getNums(num1, num2) {
    return new Promise((resolve, reject) => {
        let 
    })
} */



















/* 

fetch ("https://jsonplaceholder.typicode.com/posts", {
    method: 'GET'
})

.then(Response => {
    if (!Response.ok) {
        console.log('er0or')
    }
    return Response
})

.then(value => {
    console.log(value)
})

.catch (error => {
    console.error(error)
}) */









/* 


fetch("https://api.github.com/users", {
    method: 'GET'
})
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        let userList = document.querySelector('.usersALL');

        data.forEach(user => {
            // Создание элементов
            let titleData = document.createElement('h2');
            titleData.innerHTML = user.login;

            let avatarData = document.createElement('img');
            avatarData.src = user.avatar_url;
            avatarData.style.width = '150px';

            let adminData = document.createElement('p');
            adminData.innerHTML = `Admin: ${user.site_admin ? 'Yes' : 'No'}`;

            // Добавление элементов на страницу
            userList.appendChild(titleData);
            userList.appendChild(avatarData);
            userList.appendChild(adminData);
        });
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });

 */


let weatInt = document.querySelector(".weather__inp")
let btnCheck = document.querySelector(".weather_button")
let commList = document.querySelector('.comments-list');

btnCheck.addEventListener('click', function(){
    let weatherInterval = weatInt.value
    let apiKey = '6db35156dd3283fbdf03e03ea29ab7f0'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInterval}&appid=${apiKey}&units=metric&lang=uk`, {
        method: 'GET'
    })



    .then(Response => {
        if(!Response.ok) {
            console.log(Response)
        }
        
        return Response.json()
    })
    .then(data => {
        console.log(data)
        let weatResult = document.querySelector('.weather__result')

        let cityName = document.createElement('h5')
        cityName.textContent = data.name 
        weatResult.style.display = 'block'
        weatResult.appendChild(cityName)


        let tempr = document.createElement('h4')
        tempr.textContent = `${Math.round(data.main.temp)}°`;
        weatResult.appendChild(tempr)


        let weath = document.createElement('h3')
        weath.textContent = `weather - ${data.weather[0].main}`
        weatResult.appendChild(weath)

        let feel = document.createElement('h3')
        feel.textContent = `feels like  ${data.main.feels_like}°`
        weatResult.appendChild(feel)

        let windS = document.createElement('h3')
        windS.textContent = `wind speed  ${data.wind.speed}`
        weatResult.appendChild(windS)
        /* let iconFlag = document.createElement('img')
        iconFlag.src = data.weather[0].icon 
        weatResult.appendChild(iconFlag) */
    })

    .catch(error => {
        console.error(error)
    }) 

})



















let kyElement = document.querySelector('.ky');

let isDragging = false; 
let offsetX = 0; 
let offsetY = 0; 


kyElement.addEventListener('mousedown', (event) => {
    isDragging = true;

    
    offsetX = event.clientX - kyElement.offsetLeft
    offsetY = event.clientY - kyElement.offsetTop

    
    event.preventDefault()
});


document.addEventListener('mousemove', (event) => {
    if (isDragging) {

        kyElement.style.left = `${event.clientX - offsetX}px`
        kyElement.style.top = `${event.clientY - offsetY}px`
    }
})


document.addEventListener('mouseup', () => {
    isDragging = false
})
let nameInput = document.querySelector('.inp');
let btn = document.querySelector('.but');
let textArea = document.querySelector('.area');
let commList = document.querySelector('.comments-list');

btn.addEventListener('click', function() {
    let divComm = document.createElement('div')
    divComm.classList.add('comment')

    let nameInputValue = nameInput.value
    localStorage.setItem('input', nameInputValue)

    let textAreaValue = textArea.value
    localStorage.setItem('textArea', textAreaValue)

    let nameText = localStorage.getItem('input')
    let areaText = localStorage.getItem('textArea')

    let nameDiv = document.createElement('div')
    let textDiv = document.createElement('div')
    
    nameDiv.textContent = nameText
    textDiv.textContent = areaText
    
    nameDiv.style.color = 'white'
    nameDiv.style.fontSize = '20px'

    textDiv.style.color = 'white'
    
    divComm.appendChild(nameDiv)
    divComm.appendChild(textDiv)
    commList.appendChild(divComm)
});




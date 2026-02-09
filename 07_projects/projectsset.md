# Projects related to DOM


## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## project 1 (BG Color Change)

```javascript
console.log("Shresth's project, onclick background change")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(btn){
  btn.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id
    }
  })
})
```

## Project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form')
//  this usecase will give you empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
})
```



## Project 3 (Digital Clock)

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4 (Guess the number)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  } else if(guess < 1){
    alert("Please enter a number greater than 1")
  } else if(guess > 100) {
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  } else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  } else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}   `
  numGuess++
  remaining.innerHTML = `${12 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${12 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}

```
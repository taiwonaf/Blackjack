let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let newCard = document.getElementById("new");
let startGame = document.getElementById("start");
let blackjack = false;
let isAlive = false;
let cards =[]
let sum = 0;

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    return randomNumber;
}

startGame.onclick = () => {
    newCard.style.display = "block";
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]} `
    }
    sumEl.textContent = `sum: ${sum}`
    if (sum < 21) {
        messageEl.textContent = "Less than 21, play new card"
    } else if ( sum === 21) {
        messageEl.textContent = "You got a blackjack"
        blackjack = true
    } else {
        messageEl.textContent = "Greater than 21, you lost"
        newCard.style.display = "none"
        isAlive = false
    }
}



newCard.onclick = () => {
    if (isAlive && !blackjack ) {
        let newCard = getRandomNumber()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
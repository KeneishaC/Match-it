const gameCards = [
    {
        name: '1',
        img: ''
    },
    {
        name: '1',
        img: ''
    },
    {
        name: '2',
        img:''
    },
    {
        name: '2',
        img:''
    },{
        name: '3',
        img:''
    },{
        name: '3',
        img:''
    },
    {
        name: '4',
        img:''
    },
    {
        name: '4',
        img:''
    },{
        name: '5',
        img:''
    },{
        name: '5',
        img:''
    },{
        name: '6',
        img:''
    },{
        name: '6',
        img:''
    },

]

//Game Play 

const gameboard = document.querySelector('.gameboard')
let chosenCards = []
let chosenCardsId = []
let wonCards = []



function gamePlay(){
    for( let i = 0; i < gameCards.length) {
        let card = document. createElement('img')
        card.setAttribute('src', '')
        card.setAttribute('card-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for a match

function checkMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = chosenCardsId[1]
    const optionTwoId = chosenCardsId[0]
    if(cardsChosen[0] === cardschosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src' '')
        cars[optionTwoId].setAttribute('src', '')
        winCards.push(chosenCards)
    }else {
        cards[optionOneId].setAttribute('src')
        cards[optionTwoId].setAttribute('src')
        alert('Try again')
    }
    chosenCards = []
    chosenCardsId = []
}

//Flip each Card
    function cardFlip() {
        let cardId = this.getAttribute('card-id')
        chosenCards.push(cardArray[cardId].name)
        chosenCardsId.push
        this.setAttribute('src', cardArray[card.id].img)
        if (cardsChosen.length===2){
            setTimeout(checkMatch, 500)
        }
    }


    createBoard()
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


function gamePlay(){
    for( let i = 0; i < gameCards.length) {
        let card = document. createElement('img')
        card.setAttribute('src', '')
        card.setAttribute('card-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//checkk for a match

//Flip each Card
    function cardFlip() {
        let cardId = this.getAttribute('card-id')
        chosenCards.push(cardArray[cardId].name)
        chosenCardsId
    }


    createBoard()
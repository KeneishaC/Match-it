
    // alert('JS is Loaded')

    const gameCards = [
        {
            name: 'card1',
            img: './images/card1.png'
        },
        {
            name: 'card1',
            img: './images/card1.png'
        },
        {
            name: 'card2',
            img:'./images/card2.png'
        },
        {
            name: 'card2',
            img:'./images/card2.png'
        },
        {
            name: 'card3',
            img:'./images/card3.png'
        },
        {
            name: 'card3',
            img:'./images/card3.png'
        },
        {
            name: 'card4',
            img:'./images/card4.png'
        },
        {
            name: 'card4',
            img:'./images/card4.png'
        },
        {
            name: 'card5',
            img:'./images/card5.png'
        },
        {
            name: 'card5',
            img:'./images/card5.png'
        },
        {
            name: 'card6',
            img:'./images/card6.png'
        },
        {
            name: 'card6',
            img:'./images/card6.png'
        },
        {
            name: 'card7',
            img: './images/card7.png'
        },
        {
            name: 'card7',
            img: './images/card7.png'
        }
    
    ]

   // Sort cards into a random order each time game is played using .sort() and Math.random
    gameCards.sort(() => 0.5 - Math.random())

  

    //Game Play 
    
    const gameboard = document.querySelector('.gameboard')
    let chosenCards = []
    let chosenCardsId = []
    let winCards = []
    let announcement = document.querySelector('.message')
    let displayResult = document.querySelector('#score')
    let newGame = document.querySelector('.new-game')

    // let grid = document.querySelector('.gamecards')
    
    function gamePlay(){
        for( let i = 0; i < gameCards.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', './images/backofcard.png')
            card.setAttribute('card-id', i)
            card.addEventListener('click', cardFlip)
            gameboard.appendChild(card)
        }
        // alert('Game Starts!')
    }

    //check for a match
    
    function checkMatch(){
        let cards = document.querySelectorAll('img')
        let optionOneName = chosenCards[1]
        let optionTwoName = chosenCards[0]
        let optionOneId = chosenCardsId[0]
        let optionTwoId = chosenCardsId[1]
        //If selected cards are the same
        if(optionOneName === optionTwoName){
            winCards.push(chosenCards)
            if (winCards.length === gameCards.length/2){
                announcement.textContent = "You found all the matches!"
                //Starts a new game once all matches have been found
                newGame.addEventListener('click', function(){
                    gameboard.textContent = '';
                    announcement.textContent = '';
                    gamePlay();
                })
            } else{
             announcement.innerHTML = 'You found a match!'
             setTimeout(function() {
                announcement.innerHTML = '';
                }, 750);
            // chosenCards=[]
            // chosenCardsId=[]
            }
        }else {
            //If selected cards aren't the same
            cards[optionOneId].setAttribute('src', './images/backofcard.png')
            cards[optionTwoId].setAttribute('src', './images/backofcard.png')
            announcement.innerHTML = 'Oh no, Try again!'
             setTimeout(function() {
                announcement.innerHTML = '';
                }, 750);
        }
        chosenCards = []
        chosenCardsId = []
        //If all matches are made
        displayResult.textContent = winCards.length
        // if (winCards.length === gameCards.length/2){

        //     announcement.textContent = "You found all the matches!"
        // }
    }
    
    //Flip each Card
        function cardFlip() {
            let cardId = this.getAttribute('card-id')
            chosenCards.push(gameCards[cardId].name)
            chosenCardsId.push(cardId)
            this.setAttribute('src', gameCards[cardId].img)
            if (chosenCards.length === 2){
                setTimeout(checkMatch, 500)
            }
        }
    
    
       gamePlay()

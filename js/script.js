
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
        }, 
        {
            name: 'card8',
            img: './images/card8.png'
        },
        {
            name: 'card8',
            img: './images/card8.png'
        },
        {
            name: 'card9',
            img: './images/card9.png'
        },
        {
            name: 'card9',
            img: './images/card9.png'
        }
    
    ]

    
    //Game Play 
    
    const gameboard = document.querySelector('.gameboard')
    const getModal = document.querySelector('.modal')
    let chosenCards = []
    let chosenCardsId = []
    let winCards = []
    let announcement = document.querySelector('.message')
    let displayResult = document.querySelector('#score')
    let newGame = document.querySelector('.new-game')
    let timer = document.querySelector('.timer')
    
    function timerFunction() {
        let time = 0
    
        let ticker = setInterval(function() {
            if (time = 60000) { 
             clearInterval(ticker) 
             return
             } 
            timer.textContent = time
        time++;
        }, 1000)
    
    }
    // let grid = document.querySelector('.gamecards')
    
    function gamePlay(){
        // Sort cards into a random order each time game is played using .sort() and Math.random
        gameCards.sort(() => 0.5 - Math.random())
        timerFunction()
        for( let i = 0; i < gameCards.length; i++){
            let card = document.createElement('img')
            // card.classList.add('frontimg')
            card.setAttribute('src', './images/backofcard2.jpg')
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
        if(optionOneName === optionTwoName){
            winCards.push(chosenCards)
            if (winCards.length === gameCards.length/2){
                announcement.textContent = "You found all the matches!"
                //Launch modal
                setTimeout(function() {
                    
                    //Starts a new game once all matches have been found
                    newGame.addEventListener('click', function(){
                        gameboard.textContent = '';
                        announcement.textContent = '';
                        winCards = []
                        displayResult.textContent = '0';
                        //removes modal for new game
                        getModal.classList.remove('is-active')
                        gamePlay();
                    })
                    //targets modal for new game
                    getModal.classList.add('is-active')
                }, 750)
                    
            } else{
                //If selected cards are the same
             announcement.innerHTML = 'You found a match!'
             setTimeout(function() {
                announcement.innerHTML = '';
                }, 750);
            // chosenCards=[]
            // chosenCardsId=[]
            }
        }else {
            //If selected cards aren't the same
            // setTimeout(function(){
            // }, 450)
            // setTimeout(function(){
                //     cards[optionOneId].style.transform = "rotateY(180deg)"
                //     cards[optionTwoId].style.transform = "rotateY(180deg)"
                // }, 500)
                setTimeout(function() {
                    // cards[optionOneId].setAttribute('src', './images/backofcard2.jpg')
                    // cards[optionTwoId].setAttribute('src', './images/backofcard2.jpg')
                    announcement.innerHTML = 'Oh no, Try again!'
                }, 500);
                setTimeout(function(){
                    cards[optionTwoId].classList.add('backimg')
                    cards[optionOneId].classList.add('backimg')
                    cards[optionOneId].setAttribute('src', './images/backofcard2.jpg')
                    cards[optionTwoId].setAttribute('src', './images/backofcard2.jpg')
                    announcement.innerHTML = '';
                }, 850)
                setTimeout(function(){
                    // cards[optionOneId].setAttribute('src', './images/backofcard2.jpg')
                    // cards[optionTwoId].setAttribute('src', './images/backofcard2.jpg')
                    cards[optionTwoId].classList.remove('backimg')
                    cards[optionOneId].classList.remove('backimg')
                }, 1150)
            }
        chosenCards = []
        chosenCardsId = []
        //If all matches are made
        displayResult.textContent = winCards.length
        // if (winCards.length === gameCards.length/2){

        //     announcement.textContent = "You found all the matches!"
        // }
    }
    
    //Flip each Card to find a match
        function cardFlip() {
            let cardId = this.getAttribute('card-id')
            document.querySelectorAll('img')[cardId].classList.add('frontimg')
            setTimeout(function (){
                document.querySelectorAll('img')[cardId].classList.remove('frontimg')
            }, 700)
            //checks if same card is clicked twice
            if( chosenCardsId.includes(cardId) == false){
                chosenCards.push(gameCards[cardId].name)
                chosenCardsId.push(cardId)
            }
            this.setAttribute('src', gameCards[cardId].img)
            // setTimeout(function(){
            //     this.setAttribute('src', gameCards[cardId].img)
            // }, 550)
            // this.style.transform = "rotateY(180deg)"
                
            if (chosenCards.length === 2){
                // checkMatch()
                setTimeout(checkMatch, 550)
            }
        }
        
        
       gamePlay()

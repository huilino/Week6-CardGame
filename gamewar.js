class GameTable{
    constructor(){
        this.suits = ["Clubs","Spades","Hearts","Diamonds"];
        this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];   
        this.deck = [];
        this.player1 = [];
        this.player2 = [];
        this.player1Deck = [];
        this.player2Deck = [];
        this.player1Score = 0;
        this.player2Score = 0;
        
    }
      
    createDeck(){

        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j <this.ranks.length; j++) {
            this.deck.push([this.ranks[j], this.suits[i], [this.values[j]]]);
            }
        }
        
        return this.deck;   
    }  

    shuffleDeck() { 
        
        for (let i = this.deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = this.deck[i];
                this.deck[i] = this.deck[j];
                this.deck[j] = temp;
            }
    }

    dealDeck(){

        this.player1.push('Lynn');
        this.player2.push('Vince');

        let d = new GameTable;
        d.createDeck();
        d.shuffleDeck();
    
        this.player1Deck = d.deck.slice(0,26);
        this.player2Deck = d.deck.slice(26,52);

    }

    startGame(){
    // Looping through each of player 1 and 2 card and compare the card values. Whoever has the higher value will get 1 point 
        for (let i = 0; i < 26 ; i++){
            
            if (this.player1Deck[i][2][0] > this.player2Deck[i][2][0]){
                this.player1Score += 1;
               
                console.log(`${this.player1} : ` , this.player1Deck[i][2][0] ,this.player1Deck[i][1] + " > " + `${this.player2} : `, this.player2Deck[i][2][0],this.player2Deck[i][1]);
                console.log(`${this.player1} score !`);
                console.log(`Current Score --> ${this.player1} : ${this.player1Score}`);

            } else if (this.player1Deck[i][2][0] < this.player2Deck[i][2][0]){
                this.player2Score += 1;

                console.log(`${this.player1} : ` , this.player1Deck[i][2][0],this.player1Deck[i][1] + " < " + `${this.player2} : `, this.player2Deck[i][2][0],this.player2Deck[i][1]);
                console.log(`${this.player2} score !`);
                console.log(`Current Score --> ${this.player2} : ${this.player2Score}`);

            } else {
                console.log ("It`s a tie. No point!");
            }
        }
    }

    displayResult(){

        if (this.player1Score > this.player2Score){
            console.log(`The final score is ${this.player1} : ${this.player1Score} to ${this.player2} : ${this.player2Score}.
            The WINNER is ${this.player1}!`);
           
        } else if (this.player1Score < this.player2Score){
            console.log(`The final score is ${this.player2} : ${this.player2Score} to ${this.player1} : ${this.player1Score}.
            The WINNER is ${this.player2}!`);
            
        } else {
            console.log(`The final score is ${this.player2} : ${this.player2Score} to ${this.player1} : ${this.player1Score};
            It is a TIE !!! Try again!`);
        }
    }

    
}
let gameWar = new GameTable;
console.log(gameWar);
gameWar.createDeck();
gameWar.shuffleDeck();
gameWar.dealDeck();
gameWar.startGame();
gameWar.displayResult();





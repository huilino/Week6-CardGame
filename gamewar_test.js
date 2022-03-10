
var expect = chai.expect;
describe('GameWar', function() {
    describe('Create Deck', function(){
        it('It should return a deck of 52 cards with 4 suits and 13 ranks', function(){
            
            let deck1 = new GameTable;
            // deck1.createDeck();
            deck1.createDeck(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],["Clubs","Spades","Hearts","Diamonds"],
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
            
            expect(deck1.deck[0][1].suits).to.equal("clubs");
            expect(deck1.deck.length).to.equal(52);
            expect(deck1.suits.length).to.equal(4);
            expect(deck1.ranks.length).to.equal(13);
        
            // expect(deck1.deck[0][0][1]).to.equal("2");
            // expect(deck1.deck[0][1]).to.equal("Spades");
            // expect(deck1.deck[1][2][0]).to.equal(2);
            // expect(deck1.[0][1].suits).to.equal("Clubs");
            // expect(deck1.deck[0][2].values).to.equal(1);
          
       
        });

        it('should throw an error if the deck does not have 52 cards  ', function(){
            // expect(function() {
                let deck1 = new GameTable;  
                deck1.createDeck(); 

                expect(deck1.deck.length).to.equal(52);
             
            }).to.throw(Error);
        });
    });
   


        

var expect = chai.expect;
describe('GameWar', function() {
    describe('#createDeck', function(){
        it('should return a deck of 52 cards with 4 suits and 13 ranks', function(){
            
            let deck1 = new GameTable();
            deck1.createDeck();

            expect(deck1.deck.length).to.equal(52);
            expect(deck1.suits.length).to.equal(4);
            expect(deck1.ranks.length).to.equal(13);
                   

        });

        it('should throw an error if the deck does not have all the suits or ranks ', function(){
        
                let deck1 = new GameTable();  
                deck1.createDeck();

                
                expect(deck1.suits).to.include("Clubs");
                expect(deck1.ranks).to.include("K");
                expect(deck1.deck[0][1]).to.equal("Clubs");
                expect(deck1.deck[3][0]).to.equal("4");
                
             
        }).to.throw(Error);
    });
});
   


        
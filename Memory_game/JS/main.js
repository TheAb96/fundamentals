
var cards = [
  {
  rank : "queen",
  suit : "hearts",
  cardImage :"images/queen-of-hearts.png"
} ,
{
  rank : "queen",
  suit : "diamonds ",
  cardImage :"images/queen-of-diamonds.png"
},
{
rank : "king",
suit : "hearts ",
cardImage :"images/King-of-diamonds.png"
},
{
  rank : "king",
  suit : "diamonds ",
  cardImage :"images/King-of-diamonds.png"
}
];

var cardsInPlay = [];
function CheckforMatch (cardId){

  if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1])
{
  alert("You found a match!");
}  else {
    alert("Sorry, try again");
}
}
}
function CreateBoard () {
  for ( let i = 0 ; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    
    document.getElementById('game-board').appendChild(cardElement);
  }
}
function flipCard(cardId){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src' , cards[cardId].cardImage);
  console.log("user flipped" + " "+cards[cardId].rank);
    console.log(cards[cardId].cardImage);
        console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  CheckforMatch ();
}



CreateBoard();

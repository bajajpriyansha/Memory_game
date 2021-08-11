// scripts.js
// To flip the cards
const cards = document.querySelectorAll('.memory-card');

// Match cards
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let count = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
   }
   secondCard = this;

   checkForMatch();
}

function checkForMatch() {
   // if (firstCard.dataset.framework === secondCard.dataset.framework) {
   //   disableCards();
   //   return;
   // }
   //
   // unflipCards();
   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
   isMatch ? disableCards() : unflipCards();
 }

 function disableCards() {
    count += 1;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      // lockBoard = false;
      resetBoard();
    }, 1500);
  }
  var best_time = 70;
  function resetBoard() {
     [hasFlippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
     if(count == 8){
         let timef = 70 - counter;
         if(best_time >= timef){
           best_time = timef;
         }
         let go = confirm(`Hey, You are the Winner completed level in ${timef} seconds but best time is ${best_time} seconds!! \n Go to next level?`)
         if(go){
           document.getElementsByClassName("btn3").disabled = true;
           window.location.href = "index.html";
         }else{
           window.location.href = "index.html";
         }
     }
   }

   (function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 16);
       card.style.order = ramdomPos;
     });
   })();

   var timer = document.querySelector(".timer"); //select timer in HTML
   var counter = 70;
   function timerStart() {
       var interval = setInterval(() => {
           timer.innerHTML = counter;
           if (counter < 1) {
               // the timer has reached zero or game Over
               timer.innerHTML = "0 seconds left";
               clearInterval(interval);
               alert("Your Game has finished!!");
           } else {
               counter--;
           }
       }, 1000);
   };

   var interval = setInterval(() => {
       timer.innerHTML = counter;
       if (counter == 0) {
           // the timer has reached zero or game Over
           timer.innerHTML += " seconds";
           clearInterval(interval);
           alert("Your time is finished!!\n Want to retry");
           window.location.href = "scene3.html";
       } else {
           counter--;
       }
   }, 1000);

cards.forEach(card => card.addEventListener('click', flipCard));

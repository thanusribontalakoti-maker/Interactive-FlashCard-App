const flashcard =
document.getElementById("flashcard");

const front =
document.getElementById("front");

const back =
document.getElementById("back");

const flipBtn =
document.getElementById("flipBtn");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const shuffleBtn =
document.getElementById("shuffleBtn");

const deleteBtn =
document.getElementById("deleteBtn");

const currentCardText =
document.getElementById("currentCard");

const totalCardsText =
document.getElementById("totalCards");

const progress =
document.getElementById("progress");

let cards =
JSON.parse(
localStorage.getItem("flashcards")
) || [];

let currentIndex = 0;

function updateProgress(){

if(cards.length===0){

progress.style.width="0%";

currentCardText.textContent=0;
totalCardsText.textContent=0;

return;
}

currentCardText.textContent =
currentIndex + 1;

totalCardsText.textContent =
cards.length;

const percent =
((currentIndex+1)
/ cards.length) * 100;

progress.style.width =
percent + "%";
}

function displayCard(){

flashcard.classList.remove(
"flipped"
);

if(cards.length===0){

front.textContent =
"No Cards";

back.textContent =
"Create Cards First";

updateProgress();

return;
}

front.textContent =
cards[currentIndex].question;

back.textContent =
cards[currentIndex].answer;

updateProgress();
}

flipBtn.addEventListener(
"click",
()=>{
flashcard.classList.toggle(
"flipped"
);
}
);

flashcard.addEventListener(
"click",
()=>{
flashcard.classList.toggle(
"flipped"
);
}
);

nextBtn.addEventListener(
"click",
()=>{

if(cards.length===0)
return;

currentIndex++;

if(currentIndex>=cards.length){
currentIndex=0;
}

displayCard();

}
);

prevBtn.addEventListener(
"click",
()=>{

if(cards.length===0)
return;

currentIndex--;

if(currentIndex<0){
currentIndex=
cards.length-1;
}

displayCard();

}
);

shuffleBtn.addEventListener(
"click",
()=>{

cards.sort(
()=>Math.random()-0.5
);

displayCard();

}
);

deleteBtn.addEventListener(
"click",
()=>{

if(cards.length===0)
return;

cards.splice(
currentIndex,
1
);

localStorage.setItem(
"flashcards",
JSON.stringify(cards)
);

if(currentIndex>=cards.length){
currentIndex=
cards.length-1;
}

if(currentIndex<0){
currentIndex=0;
}

displayCard();

}
);

document.addEventListener(
"keydown",
(e)=>{

if(e.code==="Space"){

flashcard.classList.toggle(
"flipped"
);

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

}
);

displayCard();
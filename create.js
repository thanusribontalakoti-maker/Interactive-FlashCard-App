const questionInput =
document.getElementById("question");

const answerInput =
document.getElementById("answer");

const addBtn =
document.getElementById("addBtn");

const cardList =
document.getElementById("cardList");

let cards =
JSON.parse(
localStorage.getItem("flashcards")
) || [];

function saveCards(){

localStorage.setItem(
"flashcards",
JSON.stringify(cards)
);

}

function renderCards(){

cardList.innerHTML = "";

cards.forEach((card,index)=>{

const div =
document.createElement("div");

div.className = "card";

div.innerHTML = `
<h3>${card.question}</h3>

<p>${card.answer}</p>

<button
class="delete-btn"
onclick="deleteCard(${index})">
Delete
</button>
`;

cardList.appendChild(div);

});

}

function deleteCard(index){

cards.splice(index,1);

saveCards();

renderCards();

}

addBtn.addEventListener("click",()=>{

const question =
questionInput.value.trim();

const answer =
answerInput.value.trim();

if(question === "" || answer === ""){

alert("Fill all fields");

return;

}

cards.push({

question,
answer

});

saveCards();

renderCards();

questionInput.value = "";
answerInput.value = "";

});

renderCards();
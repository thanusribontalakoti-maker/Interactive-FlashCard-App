const cards =
JSON.parse(
localStorage.getItem("flashcards")
) || [];

document.getElementById("totalCards").textContent =
cards.length;
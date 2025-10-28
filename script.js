const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const card = document.getElementById("card-content");
    card.innerText = flashcards[currentIndex].term;
    showingTerm = false;
}

function displayAnswer() {
    const card = document.getElementById("card-content");
    card.innerText = flashcards[currentIndex].definition;   
    showingTerm = true;
}

// displays first card in the flashcards array
displayCard();

// The rest of the code you will write is apart of event listeners

// if the definition is showing, display the term... otherwise, display the answer then change showingTerm appropriately
const card = document.querySelector(".flashcard")
card.addEventListener("click", () => { 
        if (showingTerm) {
            showingTerm = !showingTerm;
            displayCard();
        } else {
            showingTerm = !showingTerm;
            displayAnswer();
        }
    }
);

// This line will display the card when the page is refreshed
window.onload = displayCard;

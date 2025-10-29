let flashcards = [
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

// display answer of the card
function displayAnswer() {
    const card = document.getElementById("card-content");
    card.innerText = flashcards[currentIndex].definition;   
    showingTerm = true;
}

// add a flash card to the array
function addFlashCard() {
    const term = document.getElementById("new-term").value;
    const def = document.getElementById("new-definition").value;

    if (term != "" && def != "") {
        flashcards.push({term: term, definition: def});
    }
}

// show next card
function showNext() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    displayCard();
}

// show prev card
function showPrev() {
    if (currentIndex == 0) {
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }
    displayCard()
}


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

// add a flash card when add card button is pressed
const buttonAdd = document.getElementById("add-card-btn");
buttonAdd.addEventListener("click", addFlashCard)

// go to next flash card when next button is pressed
const buttonNext = document.getElementById("next-btn");
buttonNext.addEventListener("click", showNext)

// go to previous flash card when next button is pressed
const buttonPrev = document.getElementById("prev-btn");
buttonPrev.addEventListener("click", showPrev)


// This line will display the card when the page is refreshed
window.onload = displayCard;

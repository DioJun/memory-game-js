const emoji = [
    "🐘",
    "🐘",
    "🦖",
    "🦖",
    "🦈",
    "🦈",
    "🐒",
    "🐒",
    "🐕",
    "🐕",
    "🐟",
    "🐟",
    "🐜",
    "🐜",
    "🐊",
    "🐊"
];
let openCards = [];

let suffleEmojis = emoji.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i< emoji.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = suffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
};


function soundSelect () {
    let audio = new Audio("./assets/audios/select.mp3");
    audio.volume = 0.7;
    audio.play();
}

function soundWin () {
    let audio = new Audio("./assets/audios/win.mp3");
    audio.volume = 0.7;
    audio.play();
}


function soundError () {
    let audio = new Audio("./assets/audios/error.mp3");
    audio.volume = 1;
    audio.play();
}

function soundCongratulation () {
    let audio = new Audio("./assets/audios/congratulation.mp3");
    audio.volume = 1;
    audio.play();
}

function handleClick() {
    // If openCards count is less than 2,
    if (openCards.length < 2) {
        // Add boxOpen class to card,
        this.classList.add("boxOpen");
        // and push card to openCards array.
        openCards.push(this);
    }

    // If 2 cards are open,
    if (openCards.length == 2) {
        // Call checkMatch function after 500ms delay.
        setTimeout(checkMatch, 500);
    }
    
    soundSelect();
}

 function checkMatch () {
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        soundWin();
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else {
        soundError();
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        

    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emoji.length ) {
        soundCongratulation();
    }
};

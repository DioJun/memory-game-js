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
    document.querySelector(".game").appendChild(box);
};
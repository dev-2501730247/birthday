// ====================
// FIRST SURPRISE
// ====================
const revealBtn = document.getElementById("revealBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const treeBtn = document.getElementById("treeBtn");

revealBtn.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
    revealBtn.style.display = "none";
    treeBtn.style.display = "inline-block";
});


// ====================
// SECOND SURPRISE
// ====================
const treeScene = document.getElementById("treeScene");
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const blessing = document.getElementById("blessing");

// 📸 Photos (h1.jpg → h27.jpg)
const photos = [];
for (let i = 1; i <= 27; i++) {
    photos.push(`image/heartpics/h${i}.jpg`);
}

// 💫 Blessings
const blessings = [
    "May you always be happy 💫",
    "May love find you in every form 💗",
    "May your smile never fade 🌸",
    "You deserve all the good things ✨",
    "May peace always choose you 🤍",
    "Your heart is beautiful 💞",
    "Never forget how special you are 🌷"
];

let index = 0;


// ====================
// START TREE SCENE
// ====================
treeBtn.addEventListener("click", () => {
    treeScene.style.display = "block";
    treeScene.style.opacity = "1";

    index = 0;

    photo.style.display = "block";
    photo.style.opacity = "0";

    blessing.style.opacity = "1";
    blessing.textContent = blessings[0];

    dropHeart();
});


// ====================
// HEART DROP LOOP
// ====================
function dropHeart() {
    if (index >= photos.length) {
        endScene();
        return;
    }

    // Reset heart animation
    heart.style.animation = "none";
    heart.style.opacity = "0";
    heart.offsetHeight;

    // Start falling
    heart.style.animation = "fallDown 1.2s ease forwards";
    heart.style.opacity = "1";

    // After heart lands
    setTimeout(() => {
        // PHOTO
        photo.src = photos[index];
        photo.style.opacity = "0";
        photo.offsetHeight;
        photo.style.opacity = "1";

        // BLESSING (fade change)
        blessing.style.opacity = "0";
        setTimeout(() => {
            blessing.textContent = blessings[index % blessings.length];
            blessing.style.opacity = "1";
        }, 400);

        index++;
    }, 1200);

    setTimeout(dropHeart, 2200);
}


// ====================
// END SCENE
// ====================
function endScene() {
    blessing.style.opacity = "0";
    setTimeout(() => {
        blessing.textContent = "Happy Birthday, Piyanshi 💖";
        blessing.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        treeScene.style.transition = "opacity 2s ease";
        treeScene.style.opacity = "0";
    }, 2600);
}

lucide.createIcons();

const textElement = document.getElementById('typewriter');
const states = [
    { text: "lang", wait: 1000 },
    { text: "femboy", wait: 1000 },
    { text: "femboylang", wait: 2000 }
];
let stateIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const current = states[stateIdx].text;

    if (isDeleting) {
        textElement.textContent = current.substring(0, charIdx--);
    } else {
        textElement.textContent = current.substring(0, charIdx++);
    }

    let speed = isDeleting ? 40 : 120;

    if (!isDeleting && charIdx > current.length) {
        isDeleting = true;
        speed = states[stateIdx].wait;
    } else if (isDeleting && charIdx < 0) {
        isDeleting = false;
        stateIdx = (stateIdx + 1) % states.length;
        charIdx = 0;
        speed = 400;
    }

    setTimeout(type, speed);
}
type();

function copyPip() {
    navigator.clipboard.writeText("pip install femboylang");
    alert("Copied! 🐄");
}

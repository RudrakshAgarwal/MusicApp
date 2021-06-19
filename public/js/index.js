window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    // get going with the sound here.
    pads.forEach(function (pad, index) {
        pad.addEventListener('click', function () {
            sounds[index].currentTime;
            sounds[index].play();

            createBubbles(index);
        });
    });


    // Create a functions that makes bubbles:
    const createBubbles = function (index) {
        const bubbles = document.createElement("div");
        // Here we are attaching the bubbles to the visual div.
        visual.appendChild(bubbles); 
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = "jump 1s ease";
        bubbles.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    }

});
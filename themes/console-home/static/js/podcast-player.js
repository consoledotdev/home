let playerWrapper = document.querySelector("[data-podcast-player-wrapper]");
let player = playerWrapper.querySelector("[data-podcast-player]");
let elapsedIndicatorWrapper = playerWrapper.querySelector("[data-elapsed-indicator]");
let elapsedIndicator = elapsedIndicatorWrapper.querySelector(".elapsed");

let playEpisode = () => {
    player.play();
    playerWrapper.classList.add("is-playing");
};

let stopEpisode = () => {
    player.pause();
    playerWrapper.classList.remove("is-playing");
};

let isDragging = false;
let draggedToPos = -1;
let isChangingTime = (e) => {
    let rect = elapsedIndicatorWrapper.getBoundingClientRect();
    let pos = parseFloat((e.offsetX / rect.width) * 100).toFixed(2);
    draggedToPos = pos;
    elapsedIndicator.style.width = pos + "%";
};
elapsedIndicatorWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    isChangingTime(e);
});
elapsedIndicatorWrapper.addEventListener("mouseup", (e) => {
    isDragging = false;
    if (draggedToPos >= 0) {
        let newTime = (player.duration ? player.duration : 0) * (draggedToPos / 100);
        player.currentTime = newTime;
        draggedToPos = -1;
    }
});

elapsedIndicatorWrapper.addEventListener("mousemove", (e) => {
    if (isDragging) isChangingTime(e);
});

player.ontimeupdate = (e) => {
    if (!isDragging) {
        let elapsed = parseFloat((e.target.currentTime / e.target.duration) * 100).toFixed(2);
        elapsedIndicator.style.width = elapsed + "%";
    }
};

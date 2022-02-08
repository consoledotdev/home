class AudioPlayer {
    constructor(p) {
        this.public = this.publicMethods();

        this.wrapper = p;
        this.playBtn = this.wrapper.querySelector("[data-play]");
        this.pauseBtn = this.wrapper.querySelector("[data-pause]");
        this.audioEl = this.wrapper.querySelector("[data-console-player-audio]");
        this.progress = this.wrapper.querySelector("[data-progress]");
        this.elapsed = this.progress.querySelector("[data-elapsed]");

        this.isDragging = false;
        this.draggedToPos = -1;

        this.dragTime = this.dragTime.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

        this.bind();
    }

    bind() {
        this.progress.addEventListener("mousedown", this.dragTime);
        this.progress.addEventListener("mousemove", this.dragTime);
        this.progress.addEventListener("mouseup", this.stopDragging);
        this.progress.addEventListener("mouseout", this.stopDragging);
        this.playBtn.addEventListener("click", this.play);
        this.pauseBtn.addEventListener("click", this.pause);
        this.audioEl.ontimeupdate = this.onTimeUpdate;
    }

    dragTime(e) {
        if (e.type == "mousedown") this.isDragging = true;

        if (this.isDragging) {
            let rect = this.progress.getBoundingClientRect();
            let pos = parseFloat((e.offsetX / rect.width) * 100).toFixed(2);
            this.elapsed.style.width = pos + "%";
            this.draggedToPos = pos;
        }
    }
    stopDragging() {
        if (this.isDragging) {
            this.isDragging = false;

            if (this.draggedToPos >= 0) {
                let newTime = (this.audioEl.duration ? this.audioEl.duration : 0) * (this.draggedToPos / 100);
                this.audioEl.currentTime = newTime;
                this.draggedToPos = -1;
            }
        }
    }

    onTimeUpdate(e) {
        if (!this.isDragging) {
            let elapsed = parseFloat((e.target.currentTime / e.target.duration) * 100).toFixed(2);
            this.elapsed.style.width = elapsed + "%";
        }
    }

    play() {
        this.checkOtherPlayers();
        this.audioEl.play();
        this.wrapper.classList.add("is-playing");
    }

    pause() {
        this.audioEl.pause();
        this.wrapper.classList.remove("is-playing");
    }

    checkOtherPlayers() {
        window.CNSL.players.forEach((p) => {
            if (p.public.isPlaying()) p.public.stopPlaying();
        });
    }

    publicMethods() {
        return {
            isPlaying: () => {
                return !this.audioEl.paused;
            },
            stopPlaying: () => {
                this.pause();
            },
        };
    }
}

window.CNSL = {
    players: [],
};
document.querySelectorAll("[data-console-player-wrapper]").forEach((p) => {
    window.CNSL.players.push(new AudioPlayer(p));
});

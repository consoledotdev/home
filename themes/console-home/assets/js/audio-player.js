window.CNSL = {
    players: [],
};

window.CNSL.AudioPlayer =
    window.CNSL.AudioPlayer ||
    class {
        constructor(p) {
            this.public = this.publicMethods();

            this.wrapper = p;
            this.playBtn = this.wrapper.querySelector("[data-play]");
            this.pauseBtn = this.wrapper.querySelector("[data-pause]");
            this.audioEl = this.wrapper.querySelector("[data-console-player-audio]");
            this.progress = this.wrapper.querySelector("[data-progress]");
            this.elapsed = this.progress.querySelector("[data-elapsed]");
            this.timeElapsed = this.wrapper.querySelector("[data-time-elapsed]");
            this.timeTotal = this.wrapper.querySelector("[data-time-total]");
            this.titleWrapper = this.wrapper.querySelector("[data-title-wrapper]");
            this.title = this.wrapper.querySelector("[data-title-main]");
            this.titleAlt = this.wrapper.querySelector("[data-title-alt]");

            this.isDragging = false;
            this.draggedToPos = -1;

            this.dragTime = this.dragTime.bind(this);
            this.stopDragging = this.stopDragging.bind(this);
            this.onTimeUpdate = this.onTimeUpdate.bind(this);
            this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
            this.play = this.play.bind(this);
            this.pause = this.pause.bind(this);
            this.checkOtherPlayers = this.checkOtherPlayers.bind(this);
            this.hoverScrollTitle = this.hoverScrollTitle.bind(this);
            this.hoverScrollTitleStop = this.hoverScrollTitleStop.bind(this);
            this.hoverScrollTitleAlt = this.hoverScrollTitleAlt.bind(this);
            this.hoverScrollTitleAltStop = this.hoverScrollTitleAltStop.bind(this);

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
            this.audioEl.onloadedmetadata = this.onLoadedMetadata;
            this.titleWrapper.addEventListener("mouseover", this.hoverScrollTitle);
            this.titleWrapper.addEventListener("mouseout", this.hoverScrollTitleStop);
            this.titleWrapper.addEventListener("mouseover", this.hoverScrollTitleAlt);
            this.titleWrapper.addEventListener("mouseout", this.hoverScrollTitleAltStop);
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
                this.timeElapsed.textContent = this.getFormattedTime(e.target.currentTime);
                let elapsed = parseFloat((e.target.currentTime / e.target.duration) * 100).toFixed(2);
                this.elapsed.style.width = elapsed + "%";
            }
        }

        onLoadedMetadata(e) {
            this.wrapper.classList.add("is-loaded-metadata");
            this.timeTotal.textContent = this.getFormattedTime(e.target.duration);
        }

        async play() {
            try {
                this.checkOtherPlayers();
                this.wrapper.classList.add("is-loading");
                await this.audioEl.play();
                this.wrapper.classList.add("is-playing");
                this.wrapper.classList.remove("is-loading");
                this.scrollTitle();
                this.scrollTitleAlt();
            } catch (err) {
                this.wrapper.classList.remove("is-playing");
                this.wrapper.classList.remove("is-loading");
                console.error("Can't play audio: ", err);
            }
        }

        pause() {
            this.audioEl.pause();
            this.wrapper.classList.remove("is-playing");
            this.wrapper.classList.add("is-paused");
            this.scrollTitleStop();
            this.scrollTitleAltStop();
        }

        checkOtherPlayers() {
            window.CNSL.players.forEach((p) => {
                if (p.playBtn != this.playBtn && p.public.isPlaying()) p.public.stopPlaying();
            });
        }

        getFormattedTime(duration) {
            let mins = Math.floor(duration / 60);
            let secs = Math.floor(duration % 60);
            return ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
        }

        scrollTitle() {
            let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
            let contentW = this.title.getBoundingClientRect().width;

            let goForwards = () => {
                let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
                let contentW = this.title.getBoundingClientRect().width;
                let diff = wrapperW - contentW;
                let scrollDuration = Math.abs(diff) * 50;
                this.scrollTitleFwd = setTimeout(() => {
                    this.title.style.marginLeft = diff + "px";
                    this.title.style.transitionDuration = parseInt(scrollDuration / 1000) + "s";
                    setTimeout(() => {
                        goBackwards();
                    }, scrollDuration);
                }, 10);
            };
            let goBackwards = () => {
                let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
                let contentW = this.title.getBoundingClientRect().width;
                let diff = wrapperW - contentW;
                let scrollDuration = Math.abs(diff) * 30;
                this.scrollTitleBwd = setTimeout(() => {
                    this.title.style.marginLeft = "0px";
                    this.title.style.transitionDuration = parseInt(scrollDuration / 1000) + "s";
                    setTimeout(() => {
                        goForwards();
                    }, scrollDuration);
                }, 2000);
            };
            if (wrapperW < contentW) goForwards();
        }

        scrollTitleStop() {
            this.title.style.marginLeft = "0px";
            this.title.style.transitionDuration = "0.1s";
            clearTimeout(this.scrollTitleFwd);
            clearTimeout(this.scrollTitleBwd);
        }

        hoverScrollTitle() {
            if (this.audioEl.paused) this.scrollTitle();
        }

        hoverScrollTitleStop() {
            if (this.audioEl.paused) this.scrollTitleStop();
        }

        scrollTitleAlt() {
            let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
            let contentW = this.titleAlt.getBoundingClientRect().width;

            let goForwards = () => {
                let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
                let contentW = this.titleAlt.getBoundingClientRect().width;
                let diff = wrapperW - contentW;
                let scrollDuration = Math.abs(diff) * 50;
                this.scrollTitleAltFwd = setTimeout(() => {
                    this.titleAlt.style.marginLeft = diff + "px";
                    this.titleAlt.style.transitionDuration = parseInt(scrollDuration / 1000) + "s";
                    setTimeout(() => {
                        goBackwards();
                    }, scrollDuration);
                }, 10);
            };
            let goBackwards = () => {
                let wrapperW = this.titleWrapper.getBoundingClientRect().width - 4;
                let contentW = this.titleAlt.getBoundingClientRect().width;
                let diff = wrapperW - contentW;
                let scrollDuration = Math.abs(diff) * 30;
                this.scrollTitleAltBwd = setTimeout(() => {
                    this.titleAlt.style.marginLeft = "0px";
                    this.titleAlt.style.transitionDuration = parseInt(scrollDuration / 1000) + "s";
                    setTimeout(() => {
                        goForwards();
                    }, scrollDuration);
                }, 2000);
            };
            if (wrapperW < contentW) goForwards();
        }

        scrollTitleAltStop() {
            this.titleAlt.style.marginLeft = "0px";
            this.titleAlt.style.transitionDuration = "0.1s";
            clearTimeout(this.scrollTitleAltFwd);
            clearTimeout(this.scrollTitleAltBwd);
        }

        hoverScrollTitleAlt() {
            if (this.audioEl.paused) this.scrollTitleAlt();
        }

        hoverScrollTitleAltStop() {
            if (this.audioEl.paused) this.scrollTitleAltStop();
        }

        publicMethods() {
            return {
                isPlaying: () => {
                    return !this.audioEl.paused;
                },
                stopPlaying: () => {
                    this.pause();
                },
                playAtTime: (time) => {
                    let parts = time.split(":");
                    let mins = parts[0];
                    let secs = parts[1];
                    let atTime = parseInt(parts[0] * 60);
                    atTime += parseInt(parts[1]);
                    this.audioEl.currentTime = atTime;
                    if (this.audioEl.paused) this.play();
                },
            };
        }
    };

document.querySelectorAll("[data-console-player-wrapper]").forEach((p) => {
    window.CNSL.players.push(new window.CNSL.AudioPlayer(p));
});

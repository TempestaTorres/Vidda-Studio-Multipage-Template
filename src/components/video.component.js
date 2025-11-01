import {VideoService} from "../services/videoService.js";

export class VideoPlayer {
    constructor(wrapper, iframeId ,videoId, title = '', mute = "1",loop = "1", delay = 1000) {
        this._player = document.querySelector(wrapper);

        if (this._player) {

            setTimeout(() => {

                VideoService.startVideoPlayback(this._player, iframeId,videoId, title, {
                    mute: mute,
                    loop: loop,
                });
            }, delay);
            window.addEventListener('resize', this.#onWindowResize.bind(this));
            window.addEventListener('visibilitychange', this.#onVisibilityChange.bind(this));
        }
    }

    #onWindowResize() {

        let { width, height} = VideoService.getVideoSizes(this._player.children[0]);

        this._player.children[0].style.width = `${width}px`;
        this._player.children[0].style.height = `${height}px`;
    }

    #onVisibilityChange() {
        if (document.hidden) {

            this.#pauseVideo();
        }
        else {
            this.#playVideo();
        }
    }

    #pauseVideo() {
        this._player.children[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    #playVideo() {
        this._player.children[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    #stopVideo() {
        this._player.children[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
}

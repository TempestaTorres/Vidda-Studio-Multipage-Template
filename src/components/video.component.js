import {VideoService} from "../services/videoService.js";

export class VideoPlayer {
    constructor(wrapper, videoId, title = '', mute = "1",loop = "1", delay = 1000) {
        this._player = document.querySelector(wrapper);

        if (this._player) {

            setTimeout(() => {

                VideoService.startVideoPlayback(this._player, videoId, title, {
                    mute: mute,
                    loop: loop,
                });
            }, delay);
        }
    }
}

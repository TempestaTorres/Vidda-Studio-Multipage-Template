
export class VideoService {

    static VideoSettings = {
        controls: "0",
        rel: "0",
        playsinline: "1",
        cc_load_policy: "0",
        autoplay: "1",
        mute: "1",
        loop: "1",
    }

    static startVideoPlayback(wrapper, videoId, title = '',settings = {}) {

        let videoSettings = $.extend({}, this.VideoSettings, settings);

        if (wrapper) {
            let iframe = document.createElement("iframe");

            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            iframe.allow = "web-share";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.title = title;
            iframe.width = "640";
            iframe.height = "360";

            iframe.src = "https://www.youtube.com/embed/" + videoId + `?controls=${videoSettings.controls}&rel=${videoSettings.rel}&playsinline=${videoSettings.playsinline}&autoplay=${videoSettings.autoplay}&mute=${videoSettings.mute}`

            if (videoSettings.loop === "1") {

                iframe.src += `&playlist=${videoId}&loop=${videoSettings.loop}`
            }

            const rect1 = wrapper.getBoundingClientRect();
            let s = 640 / 360;
            let r =  rect1.width /  rect1.height > s;

            let width = r ? rect1.width : rect1.height * s;
            let height = r ? rect1.width / s : rect1.height;

            iframe.style.width = `${width}px`;
            iframe.style.height = `${height}px`;

            wrapper.appendChild(iframe);

        }
    }
}

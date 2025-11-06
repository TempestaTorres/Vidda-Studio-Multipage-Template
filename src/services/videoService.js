
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

    static startVideoPlayback(wrapper, iframeId,videoId, title = '',settings = {}) {

        let videoSettings = $.extend({}, this.VideoSettings, settings);

        if (wrapper) {
            let iframe = document.createElement("iframe");

            iframe.className = "app-background-video-embed";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.title = title;
            iframe.width = "640";
            iframe.height = "360";
            iframe.id = iframeId;

            iframe.src = "https://www.youtube.com/embed/" + videoId + `?enablejsapi=1&controls=${videoSettings.controls}&rel=${videoSettings.rel}&playsinline=${videoSettings.playsinline}&autoplay=${videoSettings.autoplay}&mute=${videoSettings.mute}`

            if (videoSettings.loop === "1") {

                iframe.src += `&playlist=${videoId}&loop=${videoSettings.loop}`
            }

            wrapper.appendChild(iframe);

            let { width, height} = this.getVideoSizes(iframe);

            iframe.style.width = `${width}px`;
            iframe.style.height = `${height}px`;

        }
    }
    static getVideoSizes(video) {

        let sizes = {
            width: 0,
            height: 0,
        }

        if (video) {

            const rect1 = video.parentElement.getBoundingClientRect();
            let s = 640 / 360;
            let r =  rect1.width /  rect1.height > s;

             sizes.width = r ? rect1.width : rect1.height * s;
             sizes.height = r ? rect1.width / s : rect1.height;
        }

        return sizes;
    }
}

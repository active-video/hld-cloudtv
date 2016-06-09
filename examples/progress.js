/**
 * @use Put "progress" in the URL to enable this feature, i.e. 480p.html#progress
 */

function setupProgress(){
    if(location.href.indexOf('progress') !== -1) {
        var video = document.querySelector('video'),
            container = document.querySelector('.progress'),
            progress = document.querySelector('.progress>div');

        container.classList.add('show');

        video.addEventListener('timeupdate', function(evt){
            if(!isNaN(evt.target.duration) && !isNaN(evt.target.currentTime)){
                progress.style.webkitTransform = 'scaleX(' + (evt.target.currentTime/evt.target.duration) + ')';
            }
        });
    }

}
document.addEventListener("DOMContentLoaded", setupProgress);
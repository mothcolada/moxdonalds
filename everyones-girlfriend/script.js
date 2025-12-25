var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
document.addEventListener('DOMContentLoaded', () => {
    const imagePaths = [];
    for (let i = 1; i <= 596; i++) {
        imagePaths.push(`everyones-girlfriend/girlfriends/${i}.png`);  // lonelywolftre.at update: too many are just not here so i just did it from scratch (561 -> 596) (removed momxie and all children i know of)
    }
    
    const imageContainer = document.getElementById('let_it_rain');
    let activeElements = 0;

    function createGIRLFRIENDS() {
        if (activeElements >= 561) return;

        const imageElement = document.createElement('img');
        imageElement.classList.add('GIRLFRIENDS');
        imageElement.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];

        imageElement.style.left = `${Math.random() * 100}vw`;
        imageElement.style.animationDuration = `${Math.random() * 5 + 3}s`;

        imageContainer.appendChild(imageElement);
        activeElements++;

        imageElement.addEventListener('animationend', () => {
            imageElement.remove();
            activeElements--;
        });
    }

    setInterval(createGIRLFRIENDS, 500);
});

document.addEventListener('click', function() {
    const audio = document.getElementById('moxie-audio');
    audio.muted = !audio.muted;
    audio.play();
});

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('moxie-banner');
    banner.addEventListener('animationend', () => {
        banner.style.display = 'none';
    });
});
}
/*
     FILE ARCHIVED ON 03:09:06 Sep 05, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:59:03 Dec 25, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.44
  exclusion.robots: 0.013
  exclusion.robots.policy: 0.006
  esindex: 0.009
  cdx.remote: 5.981
  LoadShardBlock: 311.916 (3)
  PetaboxLoader3.resolve: 172.448 (4)
  PetaboxLoader3.datanode: 238.235 (4)
  load_resource: 135.555
*/
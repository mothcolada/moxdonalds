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
    for (let i = 1; i <= 21; i++) {
        imagePaths.push(`girlfriends/girlfriends/${i}.png`);  // lonelywolftre.at note: 14.png was not archived so i just made it a mochi face that i thought should be there 
    }
    
    const imageContainer = document.getElementById('let_it_rain');
    let activeElements = 0;

    function createGIRLFRIENDS() {
        if (activeElements >= 100) return;

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

    setInterval(createGIRLFRIENDS, 750);
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

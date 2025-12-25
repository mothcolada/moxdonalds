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
    const BOURGER = ['🍔', '🍟', '🍕', '🌭', '🍿', '🥤'];
    const emojiContainer = document.getElementById('let_it_rain');

    function createMoxdonaldFood() {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('food');
        emojiElement.innerText = BOURGER[Math.floor(Math.random() * BOURGER.length)];

        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDuration = `${Math.random() * 3 + 2}s`;

        emojiContainer.appendChild(emojiElement);

        emojiElement.addEventListener('animationend', () => {
            emojiElement.remove();
        });
    }
    setInterval(createMoxdonaldFood, 750);
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

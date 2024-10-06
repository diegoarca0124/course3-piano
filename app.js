const notes = {
    'do': new Howl({ src: ['assets/audios/do.mp3'] }),
    're': new Howl({ src: ['assets/audios/re.mp3'] }),
    'mi': new Howl({ src: ['assets/audios/mi.mp3'] }),
    'fa': new Howl({ src: ['assets/audios/fa.mp3'] }),
    'sol': new Howl({ src: ['assets/audios/sol.mp3'] }),
    'la': new Howl({ src: ['assets/audios/la.mp3'] }),
    'si': new Howl({ src: ['assets/audios/si.mp3'] }),
    'do-re': new Howl({ src: ['assets/audios/do-re.mp3'] }),
    're-mi': new Howl({ src: ['assets/audios/re-mi.mp3'] }),
    'fa-sol': new Howl({ src: ['assets/audios/fa-sol.mp3'] }),
    'sol-la': new Howl({ src: ['assets/audios/sol-la.mp3'] }),
    'la-si': new Howl({ src: ['assets/audios/la-si.mp3'] }),

    'do-2': new Howl({ src: ['assets/audios/do-2.mp3'] }),
    're-2': new Howl({ src: ['assets/audios/re-2.mp3'] }),
    'mi-2': new Howl({ src: ['assets/audios/mi-2.mp3'] }),
    'fa-2': new Howl({ src: ['assets/audios/fa-2.mp3'] }),
    'sol-2': new Howl({ src: ['assets/audios/sol-2.mp3'] }),
    'la-2': new Howl({ src: ['assets/audios/la-2.mp3'] }),
    'si-2': new Howl({ src: ['assets/audios/si-2.mp3'] }),
    'do-re-2': new Howl({ src: ['assets/audios/do-re-2.mp3'] }),
    're-mi-2': new Howl({ src: ['assets/audios/re-mi-2.mp3'] }),
    'fa-sol-2': new Howl({ src: ['assets/audios/fa-sol-2.mp3'] }),
    'sol-la-2': new Howl({ src: ['assets/audios/sol-la-2.mp3'] }),
    'la-si-2': new Howl({ src: ['assets/audios/la-si-2.mp3'] }),

    'do-3': new Howl({ src: ['assets/audios/do-3.mp3'] }),
    're-3': new Howl({ src: ['assets/audios/re-3.mp3'] }),
    'mi-3': new Howl({ src: ['assets/audios/mi-3.mp3'] }),
    'fa-3': new Howl({ src: ['assets/audios/fa-3.mp3'] }),
    'sol-3': new Howl({ src: ['assets/audios/sol-3.mp3'] }),
    'la-3': new Howl({ src: ['assets/audios/la-3.mp3'] }),
    'si-3': new Howl({ src: ['assets/audios/si-3.mp3'] }),
    'do-re-3': new Howl({ src: ['assets/audios/do-re-3.mp3'] }),
    're-mi-3': new Howl({ src: ['assets/audios/re-mi-3.mp3'] }),
    'fa-sol-3': new Howl({ src: ['assets/audios/fa-sol-3.mp3'] }),
    'sol-la-3': new Howl({ src: ['assets/audios/sol-la-3.mp3'] }),
    'la-si-3': new Howl({ src: ['assets/audios/la-si-3.mp3'] }),
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
    });
});

function playSound(note){
    let sound = notes[note];
    console.log(sound);
    sound.play();
}
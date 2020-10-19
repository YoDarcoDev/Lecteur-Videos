const video = document.querySelector('.video');
const btnPlayPause = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.getElementById('mute');
const fullscreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');


// GESTION PLAY / PAUSE

btnPlayPause.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);


function togglePlayPause() {

    if (video.paused) {                         // paused : propriété de l'élément video (true ou false)
        video.play();                              
        img.src = "ressources/pause.svg";  
                           
    }

    else {
        video.pause();
        img.src = "ressources/play.svg";        
    }
}




// VOLUME

volumeSlider.addEventListener('click', () => {

    video.volume = volumeSlider.value / 100;
    // console.log(video.volume); 
})


muteBtn.addEventListener('click', () => {

    if (video.muted) {  

        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
})




// BARRE ORANGE QUI AVANCE 

video.addEventListener('timeupdate', () => {
    
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";

    if (video.ended) {
        img.src = "ressources/play.svg";
    }

})



// BARRE ORANGE CLICKABLE

let rect = barreOrange.getBoundingClientRect();                // Méthode JS qui permet de donner des positions 
let largeur = rect.width;
console.log(rect);


barreOrange.addEventListener('click', (e) => {

    let x = e.clientX - rect.left;
    console.log(x);

    let widthPercent = (x * 100 / largeur);
    console.log(widthPercent);

    let durationVideo = video.duration;

    // Position en seconde par raaport au pourcentage
    video.currentTime = durationVideo * (widthPercent / 100);
})




// FULLSCREEN RESIZE

window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
})


video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})


fullscreen.addEventListener('click', () => {
    video.requestFullscreen();
})
//alert("hello")
//initialize the variable
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('master')
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let stamptime = Array.from(document.getElementsByClassName('stamptime'));
let masterSongPlay = document.getElementById("masterSongPlay")
let songPlay = document.querySelector('.songPlay')


let songs = [
    { songName: "Udayo mero pachheuri", filePath: "1.mp3", coverPath: "cover.jpg", timePath: "4:18" },
    { songName: "hamro sano ghar hola", filePath: "2.mp3", coverPath: "cover2.jpg", timePath: "4:30" },
    { songName: "hera batasale suseldai", filePath: "3.mp3", coverPath: "cover3.jpg", timePath: "4:48" },
    { songName: "suna katha mero geet", filePath: "4.mp3", coverPath: "cover4.jpg", timePath: "5:45" },
    { songName: "biratako chino ", filePath: "5.mp3", coverPath: "cover5.jpg", timePath: "4:15" },
    { songName: "ukkali orali gardai", filePath: "6.mp3", coverPath: "cover6.jpg", timePath: "4:54" }
]

songitem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
    element.getElementsByClassName('stamptime')[0].innerText = songs[i].timePath
})

//audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused ||/*or*/audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})
//Listen to event

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress)
    progressbar.value = progress
})
progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllplays();
        songIndex = parseInt(e.target.id)

        if (audioElement.paused || audioElement.currentTime <= 0) {

            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause');

            audioElement.src = `${songIndex + 1}.mp3`;
            masterSongPlay.innerText = songs[songIndex].songName

            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;

            masterPlay.classList.remove('fa-circle-play')
            masterPlay.classList.add('fa-circle-pause')

        } else {

            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');

            audioElement.src = `${songIndex + 1}.mp3`;
            masterSongPlay.innerText = songs[songIndex].songName

            audioElement.currentTime = 0;

            gif.style.opacity = 1;

            masterPlay.classList.remove('fa-circle-pause')
            masterPlay.classList.add('fa-circle-play')
            audioElement.pause()
        }
        /*e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongPlay.innerText = songs[songIndex].songName

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')*/

    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 5) {

    } else {
        songIndex += 1;
    }

    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    //masterPlay.classList.remove('fa-circle-play')
    // masterPlay.classList.add('fa-circle-pause')

})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {

    } else {
        songIndex -= 1;
    }

    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

})








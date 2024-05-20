let CoverPhoto = document.querySelector("#CoverPhoto")
let audio = document.querySelector('audio')
let Pause = document.querySelector(".pause")
let next = document.querySelector("#next")
let back = document.querySelector("#back")
let pause = document.querySelector("#pause")
let playpause = document.querySelector(".playpause")
let SongName = document.querySelector(".SongName")
let valume = document.querySelector("#valume")
let play = false
let SongIndex = 0
let Songs = [
    {
        cover: "R/song1.jpg.jpg",
        src: "R/song1.mp3.mp3",
        SongName: "Akif İslamzadə - Alagözlüm"
    },
    {
        cover: "R/song2.jpg.jpg",
        src: "R/song2.mp3.mp3",
        SongName: "Qaraqan - Hardadır (Sevgilime)"
    },
    {
        cover: "R/song3.jpg.jpg",
        src: "R/song3.mp3.mp3",
        SongName: "Evgeny Grinko - Jane Maryam"
    }

]
function NovbetiMahni(index) {
    let music = Songs[index]
    CoverPhoto.src = music.cover
    audio.src = music.src
    SongName.textContent = music.SongName
}
function playMusic() {
    play = true;
    audio.play()
    playpause.innerHTML = ` <img src="R/pause 1.png" alt="" id="play">`
}


function PauseMusic() {
    let playSong = document.querySelector("#play")
    play = false
    audio.pause()
    playpause.innerHTML = `<img src="R/play-pause-png-1-1200x1201.png" alt="" class="pause"> 
    `
}

function PauseorPlay() {
    if (play) {
        PauseMusic()
    } else {
        playMusic()
    }
}

next.addEventListener("click", () => {
    if (SongIndex === Songs.length - 1) {
        SongIndex = 0
    } else {
        SongIndex++
    }

    NovbetiMahni(SongIndex)
    playMusic()
})

back.addEventListener("click", () => {
    if (SongIndex === 0) {
        SongIndex = Songs.length - 1
    } else {
        SongIndex--
    }

    NovbetiMahni(SongIndex)
    playMusic()
})

valume.addEventListener("input", () => {
    audio.volume = valume.value
})


let Mixmode = false
let mixed = document.querySelector("#Mixmusic")
mixed.addEventListener("click", () => {

    if (Mixmode) {
        Mixmode = false
        mixed.style.backgroundColor = 'black'

    } else {
       let RandomIndex = Math.floor(Math.random() * Songs.length)
        SongIndex = RandomIndex
        NovbetiMahni(SongIndex)
        playMusic()
        mixed.style.backgroundColor = 'green'
    }

})

let loopButton = document.querySelector("#loop")
let loopMode = false
loopButton.addEventListener("click", () => {
    if (!loopMode) {
        audio.loop = true
        loopMode = true
        loopButton.style.backgroundColor = 'green'
    } else {
        audio.loop = false
        loopMode = false
        loopButton.style.backgroundColor = 'black'
    }
})

let musicSeconds= document.querySelector("#musicSeconds")
audio.addEventListener("loadedmetadata",()=>{
    let minute=Math.floor(audio.duration /60)
    let seconds= Math.floor(audio.duration %60)
    musicSeconds.textContent=`${minute} : ${seconds<10 ?"0" :""} ${seconds} `
})

let presentSeconds=document.querySelector("#presentSeconds")
audio.addEventListener("timeupdate",()=>{
    let PresentMinutes=Math.floor(audio.currentTime / 60)
    let PresentSeconds =Math.floor(audio.currentTime % 60)
    presentSeconds.textContent=`${PresentMinutes} : ${ PresentSeconds<10 ?"0" :""} ${PresentSeconds}`
})



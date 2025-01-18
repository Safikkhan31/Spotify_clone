console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {SongName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {SongName: "3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {SongName: "4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {SongName: "5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {SongName: "6", filePath: "songs/1.mp3", coverPath: "covers/6.jpg"},
    {SongName: "7", filePath: "songs/1.mp3", coverPath: "covers/7.jpg"},
    {SongName: "8", filePath: "songs/1.mp3", coverPath: "covers/8.jpg"},
    {SongName: "9", filePath: "songs/1.mp3", coverPath: "covers/9.jpg"},
    {SongName: "10", filePath: "songs/1.mp3", coverPath: "covers/9.jpg"},

];

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
});

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex = 0;
        
    }
    else{
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
})

document.getElementById("previus").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 9;
        
    }
    else{
        songIndex--;
    }
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
})
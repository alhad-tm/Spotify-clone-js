let songIndex=0;
let audioElement = new Audio('songs/kesariya.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgresBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Baarish ka paani", filePath:"songs/1.mp3",coverPath:"covers/baarish.jpg"},
    {songName:"Ciao_Adias--Annie marie", filePath:"songs/2.mp3",coverPath:"covers/ciao adias.jpg"},
    {songName:"Kesariya tera ishq", filePath:"songs/3.mp3",coverPath:"covers/kesariya.jpg"},
    {songName:"Raatn lambiyan", filePath:"songs/4.mp3",coverPath:"covers/lambiyan.jpg"},
    {songName:"Rock a bye", filePath:"songs/5.mp3",coverPath:"covers/rock-a-bye.jpg"},
    {songName:"Tere Sabg Yaara", filePath:"songs/6.mp3",coverPath:"covers/tere.jpg"}
]

songItems.forEach((element,i)=>{
  element.getElementsByTagName('img')[0].src=songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText=songs[i].songName
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgresBar.value=progress;
})

myProgresBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgresBar.value * audioElement.duration/100;
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllplays();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle')
       e.target.classList.add('fa-pause-circle')
       audioElement.src= `songs/${songIndex+1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove("fa-play-circle");
       masterPlay.classList.add("fa-pause-circle");
    })

})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    } else{
        songIndex +=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    } else{
        songIndex -=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

// 1:22:00 hrs
// 1:31:14 hrs next and previous, but still problem with masterPlay
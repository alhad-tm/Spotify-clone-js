let songIndex=0;
let audioElement=new Audio('kesariya.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgresBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');


let songs=[
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"ishq-he", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"}
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgresBar.value=progress;
})

myProgresBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgresBar.value* audioElement.duration/100;
})
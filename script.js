let songIndex=0;
let audioElement=new Audio('songs/baarish.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgresBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Baarish ka paani", filePath:"songs/baarish.mp3",coverPath:"covers/baarish.jpg"},
    {songName:"Ciao_Adias--Annie marie", filePath:"songs/ciao-adios.mp3",coverPath:"covers/ciao adias.jpg"},
    {songName:"Kesariya tera ishq", filePath:"songs/kesariya.mp3",coverPath:"covers/kesariya.jpg"},
    {songName:"Raatn lambiyan", filePath:"songs/raataan-lambiyan.mp3",coverPath:"covers/lambiyan.jpg"},
    {songName:"Rock a bye", filePath:"songs/rockabye.mp3",coverPath:"covers/rock-a-bye.jpg"},
    {songName:"Tere Sabg Yaara", filePath:"songs/tere-sang-yaara.mp3",coverPath:"covers/tere.jpg"}
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
    }else{
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
    audioElement.currentTime=myProgresBar.value* audioElement.duration/100;
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
       console.log(e.target);
       e.target.classList.remove('fa-play-circle')
       e.target.classList.add('fa-pause-circle')
    })

})


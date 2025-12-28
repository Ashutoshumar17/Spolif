console.log("welocme to Spolif");

// intitialize variables

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"Dhundhala",filepath:"songs/1.mp3",coverpath:"covers/covers1.jpg"},
    {songname:"Dua Lipa - Levitating",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Guzarish",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Jawan_ Not Ramaiya Vastavaiya",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Sahiba",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Janji",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"xsiucuydgciwnclm",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"}
]

songitems.forEach((element,i) =>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})


// audioElement.play();

// handle play/stop music
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }else{
         audioElement.pause();
         masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;

    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=> {
    // console.log('timeupdate');


    // update seekbar

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    
    })

}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
        
        makeallplay();
        songIndex = parseInt(e.target.id)-1;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = songs[songIndex].filepath;
        mastersongName.innerText = songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        makeallplay.classList.remove('fa-play');
        makeallplay.classList.add('fa-pause');
        
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>= songs.length -1){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach(item => {
  item.addEventListener('click', () => {

    navItems.forEach(i => i.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    item.classList.add('active');
    const pageId = item.getAttribute('data-page');
    document.getElementById(pageId).classList.add('active');
  });
});
const bottomBar = document.querySelector('.bottom');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.dataset.page === 'about') {
      bottomBar.style.display = 'none';
    } else {
      bottomBar.style.display = 'flex';
    }
  });
});

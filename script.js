console.log ("qwerty")

let names = ['Super_kuz', 'Антон М', 'Антон Б', 'Евгений Керсновский', 
'Vladislav', 'Пьют все', 'Свету$ик', 'АлинОчка' ,
'Н@стя' ,'Natashka', 'Все женщины',
'Все парни','Очкарики','Те, у кого день рождения', '2000-е','До 2000-х', 'Рита'];
let successSoundName = 'success-sound-effect.mp3';
let musicNames = ['chgk', 'jungle'];

const mp = document.getElementById("audiotag1")
const button = document.getElementById('btn');
let prevAudio;
let audio;
button.addEventListener('click', buttonHandler);

async function buttonHandler(){

    let rndMusic = getRandomInt(musicNames.length);

    if (prevAudio){
        prevAudio.pause();
        prevAudio.currentTime = 0;
    }

    audio = new Audio (musicNames[rndMusic] + ".mp3")
     audio.play();
     prevAudio = audio;

   /*  setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 10 * 1000) */

    await RandomName();
   

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function RandomName(){
    let skipCount = generateRandom(25, 90);
    console.log(skipCount);


        for (var i = 0; i < skipCount; i++) {
            setTimeout(() => {
                let rndIndex = getRandomInt(names.length);
                button.innerText = names[rndIndex];
                console.log(i);
            }, 100 * i);
         }
    
         setTimeout(() => {
            console.log('end');
            audio.pause();
            audio.currentTime = 0;

            a = new Audio (successSoundName)
            a.play();
         }, 100 * skipCount);



  }

  function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

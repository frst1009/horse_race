// function raceStart(){
//     let mySound = new Audio('./audio/01426.mp3');
//     horseSound.play();
//     horseSound.volume = 0.2;
// }
function startRace() {
  var horses = [
    { id: 'jewel_1', position: 0 },
    { id: 'john_2', position: 0 },
    { id: 'jessica_3', position: 0 }
  ];
  var finishLine = document.getElementById('finish').offsetLeft;//position of the finishline
  var raceInterval;
  var selectedHorse = document.getElementById('horseSelect').value;//return value of selected horse
  var betAmount = parseInt(document.getElementById('betAmount').value);//return value of bet turned into number
  let horseSound = new Audio('./audio/01426.mp3');
   horseSound.play();
  raceInterval = setInterval(moveHorses, 40);
  function moveHorses() {
    for (var i = 0; i < horses.length; i++) {
      var horse = horses[i];
      horse.position += Math.floor(Math.random() * 10) + 1;
      document.getElementById(horse.id).style.left = horse.position + 'px';
      if (horse.position >= finishLine) {
        clearInterval(raceInterval);
        horseSound.pause();
        if (horse.id === selectedHorse) {
          alert('Congratulations! ' + horse.id + ' won the race! You won ' + (betAmount * 2) + ' pounds!');
        } else {
          alert('Sorry, ' + horse.id + ' won the race. You lost ' + betAmount + ' pounds.');
        }
        location.reload();
      }
    }
  }
}

'use strict';
const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');
const current1 = document.querySelector('#current-1');
const current2 = document.querySelector('#current-2');
const btnroll = document.querySelector('.btn-roll');
const btnhold = document.querySelector('.btn-hold');
const btnnew = document.querySelector('.btn-new');
const diceimage = document.querySelector('.dice');
const btnnewgame = document.querySelector('.newgame');
const overlay = document.querySelector('.overlay');
score1.textContent = 0;
score2.textContent = 0;

let currentscore = 0;
let activeplayer = 1;
diceimage.classList.add('hidden');
btnroll.addEventListener('click', function () {
    //1 generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    //display the dice
    diceimage.classList.remove('hidden');
    diceimage.src = `dice-${dice}.png`;
    console.log(activeplayer);
    //if dice =1 switch user and clear the current

    if (dice !== 1) {
        //current score addition
        currentscore += dice;
        document.getElementById(`current-${activeplayer}`).textContent =
            currentscore;
    } else {
        //switch player
        currentscore = 0;
        document.getElementById(`current-${activeplayer}`).textContent =
            currentscore;
        activeplayer = activeplayer === 1 ? 2 : 1;
        document.querySelector('.player-2').classList.toggle('active');
        document.querySelector('.player-1').classList.toggle('active');
    }
});
btnhold.addEventListener('click', function () {
    //holding then add the score to the main
    document.querySelector(`#score-${activeplayer}`).textContent =
        Number(document.querySelector(`#score-${activeplayer}`).textContent) +
        currentscore;
    //change the current scores to zero
    currentscore = 0;
    document.querySelector(`#current-${activeplayer}`).textContent =
        currentscore;
    //winner declaration
    if (
        Number(document.querySelector(`#score-${activeplayer}`).textContent) >=
        10
    ) {
        document.querySelector('.player-winner').textContent = activeplayer;
        document.querySelector('.winner').classList.toggle('hidden');
        overlay.classList.remove('hidden');
        makeConfetti();
    }
    //change the player
    activeplayer = activeplayer === 1 ? 2 : 1;
    document.querySelector('.player-2').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
});
btnnew.addEventListener('click', function () {
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    document.querySelector('.winner').classList.add('hidden');
    document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.player-1').classList.add('active');
    activeplayer = 1;
    diceimage.classList.add('hidden');
    overlay.classList.add('hidden');
});

btnnewgame.addEventListener('click', function () {
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    document.querySelector('.winner').classList.add('hidden');
    document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.player-1').classList.add('active');
    activeplayer = 1;
    diceimage.classList.add('hidden');
    overlay.classList.add('hidden');
});

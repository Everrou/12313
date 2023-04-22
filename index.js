let stone = document.querySelector('#stone');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let botBattle =document.querySelector('.botBattle');

let stoneImg = 'T1.jpg';
let paperImg = 'T2.jpg';
let scissorsImg = 'T3.jpg';

let imagesUser = document.getElementById("images-user");
let imagesBot = document.getElementById("images-bot");

let sU = 0;
let sB = 0;

let sB1 = 0;
let sB2 = 0;

botBattle.onclick = () => {

  fight();

function fight () {

  let result = document.querySelector('.result')



    let BotOne = Math.floor(Math.random()*3);
    let gamer = 1;

    if (BotOne === 0) {
      console.log('Камень');
      let BotTwo = Math.floor(Math.random()*3);

      if (gamer > BotTwo) {
        imagesUser.src = stoneImg;
        imagesBot.src = scissorsImg;

        sB1 = sB1 + 1;
        out.innerHTML = 'Игрок выиграл' + ' ' + 'Компьютер проиграл';
      } else if (gamer < BotTwo){
        imagesUser.src = stoneImg;
        imagesBot.src = paperImg;

        sB2 = sB2 + 1;
        out.innerHTML = 'Игрок проиграл' + ' ' + 'Компьютер выиграл';
      } else if (gamer === BotTwo) {
        imagesUser.src = stoneImg;
        imagesBot.src = stoneImg;

        out.innerHTML = 'Ничья';
        }
      }

      if (BotOne === 1) {
        console.log('Бумага');
        let BotTwo = Math.floor(Math.random()*3);

        if (gamer > BotTwo) {
          imagesUser.src = paperImg;
          imagesBot.src = stoneImg;

          sB1 = sB1 + 1;
          out.innerHTML = 'Игрок выиграл' + ' ' + 'Компьютер проиграл';
        } else if (gamer < BotTwo){
          imagesUser.src = paperImg;
          imagesBot.src = scissorsImg;

          sB2 = sB2 + 1;
          out.innerHTML = 'Игрок проиграл' + ' ' + 'Компьютер выиграл';
        } else if (gamer === BotTwo) {
          imagesUser.src = paperImg;
          imagesBot.src = paperImg;


          out.innerHTML = 'Ничья';
          }
      }

      if (BotOne === 2) {
        console.log('Ножницы');
        let BotTwo = Math.floor(Math.random()*3);

        if (gamer > BotTwo) {
          imagesUser.src = scissorsImg;
          imagesBot.src = paperImg;

          sB1 = sB1 + 1;
          out.innerHTML = 'Игрок выиграл' + ' ' + 'Компьютер проиграл';
        } else if (gamer < BotTwo){
          imagesUser.src = scissorsImg;
          imagesBot.src = stoneImg;

          sB2 = sB2 + 1;
          out.innerHTML = 'Игрок проиграл' + ' ' + 'Компьютер выиграл';
        } else if (gamer === BotTwo) {
          imagesUser.src = scissorsImg;
          imagesBot.src = scissorsImg;


          out.innerHTML = 'Ничья';
          }
      }
      result.innerHTML = 'Игрок: ' + sB1 + '<br>' +'Компьютер: ' + sB2;
    }
}

scissors.onclick =  () => {
  let computer = Math.floor(Math.random()*3);

if (computer === 0) {

  var bot = 3;

} else if (computer === 1) {

  var bot = 1;

} else {

  var bot = 2;

};

  let user = 2;
  if (user === bot) {

  imagesUser.src = scissorsImg;

  imagesBot.src = scissorsImg;
  document.getElementById('out').innerHTML = 'Ничья';
} else if  (user < bot) {

  document.getElementById('out').innerHTML = 'Проигрыш';
  sB = sB + 1;

  imagesUser.src = scissorsImg;

  imagesBot.src = stoneImg;
} else if  (user > bot) {

  imagesUser.src = scissorsImg;

  imagesBot.src = paperImg;
  document.getElementById('out').innerHTML = 'Победа';
  sU = sU + 1;

}
document.querySelector('.result').innerHTML = "Игрок: " + sU + '<br>' + "Компьютер: " + sB;
}

paper.onclick = function () {
  let computer = Math.floor(Math.random()*3);

if (computer === 0) {

  var bot = 1;

} else if (computer === 1) {

  var bot = 2;

} else {

  var bot = 3;

}

  let user = 2;
  if (user === bot) {

  imagesUser.src = paperImg;

  imagesBot.src = paperImg;
    document.getElementById('out').innerHTML = 'Ничья';
} else if  (user < bot) {

    imagesUser.src = paperImg;

    imagesBot.src = scissorsImg;
  document.getElementById('out').innerHTML = 'Проигрыш';
  sB = sB + 1;
} else if  (user > bot) {

    imagesUser.src = paperImg;

    imagesBot.src = stoneImg;
  document.getElementById('out').innerHTML = 'Победа';
  sU = sU + 1;

}
document.querySelector('.result').innerHTML = "Игрок: " + sU + '<br>' + "Компьютер: " + sB;
}

stone.onclick = function () {

 let computer = Math.floor(Math.random()*3);

if (computer === 0) {

  var bot = 2;

} else if (computer === 1) {

  var bot = 3;

} else {

  var bot = 1;

}

  let user = 2;
  if (user === bot) {

    imagesUser.src = stoneImg;

    imagesBot.src = stoneImg;
    document.getElementById('out').innerHTML = 'Ничья';
} else if  (user > bot) {

  imagesUser.src = stoneImg;

  imagesBot.src = paperImg;
  document.getElementById('out').innerHTML = 'Проигрыш';
  sB = sB + 1;
} else if  (user < bot) {

  imagesUser.src = stoneImg;

  imagesBot.src = scissorsImg;
  document.getElementById('out').innerHTML = 'Победа';
  sU = sU + 1;
}
document.querySelector('.result').innerHTML = "Игрок: " + sU + '<br>' + "Компьютер: " + sB;
}
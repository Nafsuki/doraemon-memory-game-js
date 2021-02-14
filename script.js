const cardsArray = [
  {
        name: 'dora',
        img: './images/joy.png'
      },
      {
        name: 'dorami',
        img: './images/dorami.png'
      },
      {
        name: 'takeshi',
        img: './images/gouda_takeshi.png'
      },
      {
        name: 'nobita',
        img: './images/nobita_nobi.png'
      },
      {
        name: 'shizuka',
        img: './images/shizuka.png'
      },
      {
        name: 'suneo',
        img: './images/suneo.png'
      },
      {
        name: 'dora',
        img: './images/joy.png'
      },
      {
        name: 'dorami',
        img: './images/dorami.png'
      },
      {
        name: 'takeshi',
        img: './images/gouda_takeshi.png'
      },
      {
        name: 'nobita',
        img: './images/nobita_nobi.png'
      },
      {
        name: 'shizuka',
        img: './images/shizuka.png'
      },
      {
        name: 'suneo',
        img: './images/suneo.png'
      },
]

// const addGlobalEventListener = (type, selector, callback) => {
//   document.addEventListener(type, e => {
//     if (e.target.matches(selector)) {
//       callback(e);
//     }
//   })
// }

cardsArray.sort(() => 0.5 - Math.random());
console.log(cardsArray);

const gameContainer = document.getElementById('game-container');
const createBoard = () => {
  for(let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', i);
    gameContainer.appendChild(card);

    const bell = document.createElement('img');
    bell.classList.add('bell');
    bell.setAttribute('src', './images/bell.png');
    bell.setAttribute('alt', 'bell-img');
    bell.setAttribute('id', i);
    card.appendChild(bell);

    const cardFront = document.createElement('img');
    cardFront.classList.add('card-front');
    cardFront.setAttribute('src', cardsArray[i].img);
    card.appendChild(cardFront);
    cardFront.style.display = 'none';
  }
}

createBoard();



addGlobalEventListener('click', 'img', e => {
  console.log(e.target.parentNode.className);
  e.target.parentNode.classList.toggle('flipped');
  e.target.style.transform = 'rotateY(180deg)';
  const flipCard = () => {
      e.target.nextSibling.style.display = 'block'
  }
  setTimeout(flipCard, 500);
})

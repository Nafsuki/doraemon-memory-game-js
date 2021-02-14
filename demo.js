document.addEventListener('DOMContentLoaded', () => {
  const facesArray = [
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

  facesArray.sort(() => 0.5 - Math.random());
  console.log(facesArray);

  const container = document.getElementById('container');
  const result = document.getElementById('result');
  let cardsChosen = [];
  let cardsChosenId = [];

  const checkForMatch = () => {
    const cards = document.querySelectorAll('.card');
    if (cardsChosen[0] === cardsChosen[1]) {
      console.log('yay');
      cards[cardsChosenId[0]].removeEventListener('click', flipCard);
      cards[cardsChosenId[1]].removeEventListener('click', flipCard);
    } else {
      cards[cardsChosenId[0]].classList.remove('is-flipped');
      cards[cardsChosenId[1]].classList.remove('is-flipped');
    }
    cardsChosen = [];
    cardsChosenId = [];
  }

  // Flip card
  const flipCard = e => {
    const targetCard = e.target.parentNode.parentNode;
    // console.log(targetCard);
    targetCard.classList.toggle('is-flipped');

    const clickedFaceNode = e.target.parentNode.nextSibling.firstChild;
    // console.log(clickedFaceNode);

    const clickedId = targetCard.getAttribute('data-id');
    cardsChosen.push(clickedFaceNode.alt);
    cardsChosenId.push(clickedId);
    
    // console.log(cardsChosen);
    // console.log(cardsChosenId);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 1000); 
    } else if (cardsChosen.length > 2) {
      alert('You clicked too many!');
      targetCard.classList.remove('is-flipped');
    } 
  }

  const createCard = () => {
    for(let i = 0; i < facesArray.length; i++) {
      //Create cards
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      container.appendChild(card);

      card.addEventListener('click', flipCard);

      //Create front
      const front = document.createElement('div');
      front.classList.add('front');
      card.appendChild(front);

      //Create back
      const back = document.createElement('div');
      back.classList.add('back');
      card.appendChild(back);

      //Create front images
      const frontImg = document.createElement('img');
      frontImg.classList.add('front-img');
      frontImg.setAttribute('src', './images/bell.png');
      front.appendChild(frontImg);

      //Create back images
      const backImg = document.createElement('img');
      backImg.classList.add('back-img');
      backImg.setAttribute('src', facesArray[i].img);
      backImg.setAttribute('data-id', i);
      backImg.setAttribute('alt', facesArray[i].name);
      back.appendChild(backImg);
    }
  } 

  createCard();

})
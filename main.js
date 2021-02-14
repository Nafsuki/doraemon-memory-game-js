document.addEventListener('DOMContentLoaded', () => {
  
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      card.classList.toggle('is-flipped');
      console.log(e.target.nextSibling);
      
      let flippedCard = [];
      flippedCard.push(e.target.getAttribute('alt'));
    })
  })

  // Check for matches
  const checkForMatch = () => {
    const flippedCards = document.querySelectorAll('')
  }
})
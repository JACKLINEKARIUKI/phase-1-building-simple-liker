// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function simpleLiker(){
  const error = document.getElementById('modal');
  error.className = 'hidden';
  const likeGlyphCollection = document.querySelectorAll('.like-glyph');
  for (const likeGlyph of likeGlyphCollection) {
  likeGlyph.addEventListener('click', (event) => {
    mimicServerCall()
    .then((result) => {
      if (result) {
        checkLikeGlyph(likeGlyph);
      }
    })
    .catch(() =>  {
      error.className = '';
      const errorMessage = error.querySelector('h2');
      errorMessage.innerText = "Random server error. Try again.";
      setTimeout(() => {
        error.className = 'hidden';
      }, 3000);
    })
  });
}
}
simpleLiker();


function checkLikeGlyph(likeGlyph) {
  if (likeGlyph.innerHTML === EMPTY_HEART) {
    likeGlyph.innerHTML = FULL_HEART;
    likeGlyph.className = 'like-glyph activated-heart';
  }
  else if (likeGlyph.innerHTML === FULL_HEART) {
    likeGlyph.innerHTML = EMPTY_HEART;
    likeGlyph.className = 'like-glyph';
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

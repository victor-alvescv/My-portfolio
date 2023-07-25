let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;

  if (contrastToggle) {
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}



function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const sucess = document.querySelector(".modal__overlay--sucess");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_pvn936e",
      "template_zql1khp",
      event.target,
      "YIVHwcnxzWc5rEOtr"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      sucess.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on victoralvescabral7@gmail.com"
      );
    });
}
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function readMore() {
   let readmorebtn = document.querySelector('.readmore-btn')
   let readmoretext = document.querySelector('.readmore-text')
   let readlessbtn = document.querySelector('.readless-btn')
   readmorebtn.style.display = 'none';
   readmoretext.style.display = 'inline';
   readlessbtn.style.display = 'inline';
}

function readLess() {
  let readmorebtn = document.querySelector('.readmore-btn')
  let readmoretext = document.querySelector('.readmore-text')
  let readlessbtn = document.querySelector('.readless-btn')
  readmorebtn.style.display = 'inline';
  readmoretext.style.display = 'none';
  readlessbtn.style.display = 'none';
}

function readMoreMovie() {
  let readmorebtnmovie = document.querySelector('.readmore-btn-movie')
  let readmoretextmovie = document.querySelector('.readmore-text-movie')
  let readlessbtnmovie = document.querySelector('.readless-btn-movie')
  readmorebtnmovie.style.display = 'none';
  readmoretextmovie.style.display = 'inline';
  readlessbtnmovie.style.display = 'inline';
}

function readLessMovie() {
  let readmorebtnmovie = document.querySelector('.readmore-btn-movie')
  let readmoretextmovie = document.querySelector('.readmore-text-movie')
  let readlessbtnmovie = document.querySelector('.readless-btn-movie')
  readmorebtnmovie.style.display = 'inline';
  readmoretextmovie.style.display = 'none';
  readlessbtnmovie.style.display = 'none';
}

function readMoreTreact() {
  let readmorebtntreact = document.querySelector('.readmore-btn-treact')
  let readmoretexttreact = document.querySelector('.readmore-text-treact')
  let readlessbtntreact = document.querySelector('.readless-btn-treact')
  readmorebtntreact.style.display = 'none';
  readmoretexttreact.style.display = 'inline';
  readlessbtntreact.style.display = 'inline';
}

function readLessTreact() {
  let readmorebtntreact = document.querySelector('.readmore-btn-treact')
  let readmoretexttreact = document.querySelector('.readmore-text-treact')
  let readlessbtntreact = document.querySelector('.readless-btn-treact')
  readmorebtntreact.style.display = 'inline';
  readmoretexttreact.style.display = 'none';
  readlessbtntreact.style.display = 'none';
}

function readMoreSummarist() {
  let readmorebtnsummarist = document.querySelector('.readmore-btn-summarist')
  let readmoretextsummarist = document.querySelector('.readmore-text-summarist')
  let readlessbtnsummarist = document.querySelector('.readless-btn-summarist')
  readmorebtnsummarist.style.display = 'none';
  readmoretextsummarist.style.display = 'inline';
  readlessbtnsummarist.style.display = 'inline';
}

function readLessSummarist() {
  let readmorebtnsummarist = document.querySelector('.readmore-btn-summarist')
  let readmoretextsummarist = document.querySelector('.readmore-text-summarist')
  let readlessbtnsummarist = document.querySelector('.readless-btn-summarist')
  readmorebtnsummarist.style.display = 'inline';
  readmoretextsummarist.style.display = 'none';
  readlessbtnsummarist.style.display = 'none';
}
import generateJoke from './generateJoke';
import './styles/main.scss';
import laughingEmoji from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughingEmoji;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

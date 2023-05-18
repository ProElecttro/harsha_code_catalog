const notification = document.getElementById('notifi');
const audio = new Audio('Rick_Roll_Meme_Sound_Effect_Never_(getmp3.pro).mp3');
audio.preload = 'auto';

function showNotification() {
    notification.innerHTML = '';
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            notification.classList.add('active');
            notification.innerHTML = data.setup + '<br />' + data.punchline;
            audio.currentTime = 0;
            audio.play();
            setTimeout(() => {
                notification.classList.remove('active');
            }, 9000);
        })
        .catch(error => {
            console.error(error);
        });
}

showNotification();
setInterval(showNotification, 10000);

const themeToggle = document.getElementById('theme-toggle');
const body = document.getElementsByTagName('body')[0];

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
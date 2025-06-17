const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('https://luancostaf.github.io/MarioJumpGame/jump.png');


    setTimeout(() =>{
    mario.classList.remove('https://luancostaf.github.io/MarioJumpGame/jump.png');
    },500);
}

const loop = setInterval(() => {
    
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'https://luancostaf.github.io/MarioJumpGame/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);   

document.addEventListener('keydown', jump);

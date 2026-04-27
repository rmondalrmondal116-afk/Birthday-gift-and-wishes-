const trigger = document.getElementById('start-trigger');
const remote = document.getElementById('remote-screen');
const scene = document.getElementById('scene-area');
const train = document.getElementById('train');

trigger.addEventListener('click', function() {
    remote.classList.add('hidden');
    scene.classList.remove('hidden');
    
    // Train Dum Dum station-e dhukbe
    setTimeout(() => {
        train.style.left = '40%';
    }, 500);
});

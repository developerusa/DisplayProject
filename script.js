document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        moveToRandomPosition(project);
    });

    function moveToRandomPosition(element) {
        const container = document.querySelector('.container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const elementWidth = element.clientWidth;
        const elementHeight = element.clientHeight;

        const randomX = Math.random() * (containerWidth - elementWidth);
        const randomY = Math.random() * (containerHeight - elementHeight);

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    // Create stars
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 600; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        moveToRandomPosition(star);
        starsContainer.appendChild(star);
    }

    // Create big stars
    for (let i = 0; i < 50; i++) {
        const bigStar = document.createElement('div');
        bigStar.classList.add('big-star');
        moveToRandomPosition(bigStar);
        starsContainer.appendChild(bigStar);
    }
    // Create shooting stars
    for (let i = 0; i < 10; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.left = `${Math.random() * 100}vw`;
        starsContainer.appendChild(shootingStar);
    }
    // Autoplay background music
    const music = document.getElementById('background-music');
    const playMusic = () => {
        if (music.paused) {
            music.play().catch(error => {
                console.error('Autoplay was prevented:', error);
                document.addEventListener('click', () => {
                    music.play();
                }, { once: true });
            });
        }
    };

    playMusic();
});

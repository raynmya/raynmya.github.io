document.addEventListener('DOMContentLoaded', function () {
    // Typed.js initialization
    var typed = new Typed('#typed', {
        strings: ['Hackathon Enthusiast', 'Curious Creator', 'System Designer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });

    // Stars initialization
    function createStars() {
        var stars = document.getElementById('stars');
        for (var i = 0; i < 100; i++) {
            var star = document.createElement('div');
            star.className = 'star';
            star.style.width = (Math.random() * 3) + 'px';
            star.style.height = star.style.width;
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.left = Math.random() * window.innerWidth + 'px';
            stars.appendChild(star);
        }
    }
    createStars();
});

// Confeti automático al cargar
window.onload = () => {
    lanzarConfetiElegante();
};

function celebrar() {
    lanzarConfetiElegante();
    // Mensaje opcional en consola o alerta suave
    console.log("¡Salud! 🥂");
}

function lanzarConfetiElegante() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    
    // Colores de la paleta: Oro, Rosa, Café suave
    var colors = ['#C5A059', '#ffc3a0', '#ffffff'];

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        
        // Confeti desde los lados como una lluvia fina
        confetti({
            particleCount: particleCount,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
            zIndex: 999
        });
        confetti({
            particleCount: particleCount,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
            zIndex: 999
        });
    }, 250);
}

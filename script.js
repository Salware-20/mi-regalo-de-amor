let clickEnabled = true;

document.getElementById('heart').addEventListener('click', function (event) {
    if (!clickEnabled) return;

    clickEnabled = false;

    for (let i = 0; i < 5; i++) {
        createPetal(event.clientX, event.clientY);
    }

    setTimeout(() => {
        clickEnabled = true;
    }, 3000); // Habilitar el clic después de 3 segundos (ajusta según sea necesario)
});

function createPetal(x, y) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    document.body.appendChild(petal);

    const petalSize = Math.random() * 20 + 10;
    petal.style.width = `${petalSize}px`;
    petal.style.height = `${petalSize}px`;
    petal.style.background = getRandomColor();

    const speed = Math.random() * 2 + 1;
    const angle = Math.random() * 360;
    const radians = (angle * Math.PI) / 180;

    const animationDuration = Math.random() * 3 + 2;
    petal.style.animation = `fall ${animationDuration}s linear`;

    petal.style.left = `${x}px`;
    petal.style.top = `${y}px`;

    const deltaX = speed * Math.cos(radians);
    const deltaY = speed * Math.sin(radians);

    const interval = 10; // Intervalo de actualización de posición en milisegundos

    const fall = setInterval(() => {
        x += deltaX;
        y += deltaY;
        petal.style.left = `${x}px`;
        petal.style.top = `${y}px`;

        if (y > window.innerHeight) {
            clearInterval(fall);
            setTimeout(() => {
                petal.remove();
            }, 2000); // Eliminar después de 2 segundos
        }
    }, interval);
}

function getRandomColor() {
    const colors = ['#ff69b4', '#00ff00']; // Rosado y verde
    return colors[Math.floor(Math.random() * colors.length)];
}

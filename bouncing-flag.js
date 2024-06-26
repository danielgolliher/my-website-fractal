// Make sure this code is in a file named bouncing-flag.js

document.addEventListener('DOMContentLoaded', function() {
    const flag = document.getElementById('bouncing-flag');
    let x = Math.random() * (window.innerWidth - 50);  // Initial X position
    let y = Math.random() * (window.innerHeight - 50); // Initial Y position
    let dx = 5; // X velocity
    let dy = 5; // Y velocity

    function animate() {
        // Update position
        x += dx;
        y += dy;

        // Check for collision with right/left edges
        if (x + flag.offsetWidth > window.innerWidth || x < 0) {
            dx = -dx;
        }

        // Check for collision with bottom/top edges
        if (y + flag.offsetHeight > window.innerHeight || y < 0) {
            dy = -dy;
        }

        // Apply new position
        flag.style.left = x + 'px';
        flag.style.top = y + 'px';

        // Call animate again on the next frame
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();

    // Adjust flag position on window resize
    window.addEventListener('resize', () => {
        x = Math.min(x, window.innerWidth - flag.offsetWidth);
        y = Math.min(y, window.innerHeight - flag.offsetHeight);
    });
});

console.log('Bouncing flag script loaded');
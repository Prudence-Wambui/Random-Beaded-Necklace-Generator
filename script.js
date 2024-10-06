// Get the canvas and context
const canvas = document.getElementById('necklaceCanvas');
const ctx = canvas.getContext('2d');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random bead size
function getRandomSize() {
    return Math.floor(Math.random() * 15) + 5; // Bead size between 5 and 20
}

// Function to draw a beaded necklace pattern
function drawNecklacePattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing

    let x = canvas.width / 2;
    let y = 100;
    const beadSpacing = 40;

    // Draw beads in a vertical zig-zag pattern
    for (let i = 0; i < 20; i++) {
        const size = getRandomSize();
        const color = getRandomColor();
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, false); // Draw a bead
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
        
        // Alternate between left and right for the zig-zag
        if (i % 2 === 0) {
            x -= beadSpacing;
        } else {
            x += beadSpacing;
        }

        y += beadSpacing; // Move down for the next bead
    }
}

// Add event listener to the button
document.getElementById('generatePattern').addEventListener('click', drawNecklacePattern);

// Initial drawing on page load
drawNecklacePattern();

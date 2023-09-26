document.addEventListener("DOMContentLoaded", function() {
    const clickableBoxes = document.querySelectorAll('.clickable-box');
    clickableBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const textBoxId = box.id.replace('box', 'text');
            const textBox = document.getElementById(textBoxId);
    
            textBox.classList.toggle('show-text-box');
        });
    });
});





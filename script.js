const h3 = document.querySelector('h3');
const btn = document.querySelector('.random');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
    console.log('Button clicked!');
    if (Math.random() < 0.5) {
        img.src = 'resources/tails.svg'
        h3.textContent = 'Tails!';
    } else {
        img.src = 'resources/heads.svg'
        h3.textContent = 'Heads!';
    } 
});
img.addEventListener('click', () => {
    console.log('Button clicked!');
    if (Math.random() < 0.5) {
        img.src = 'resources/tails.svg'
        h3.textContent = 'Tails!';
    } else {
        img.src = 'resources/heads.svg'
        h3.textContent = 'Heads!';
    } 
});

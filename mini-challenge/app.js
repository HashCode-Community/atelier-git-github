document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('clickBtn');
    const message = document.getElementById('message');

    btn.addEventListener('click', () => {
        message.textContent = 'Bravo ! Tu as cliqué sur le bouton.';
        message.style.color = '#27ae60';
    });
});

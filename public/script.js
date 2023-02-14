const close = document.getElementById('close');
const open = document.getElementById('open');
const menu = document.getElementById('menu');

open.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        open.classList.add('hidden');
        close.classList.remove('hidden')
    }
})

close.addEventListener('click', () => {
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        open.classList.remove('hidden');
        close.classList.add('hidden')
    }
})
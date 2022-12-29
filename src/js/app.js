const check = document.querySelector('#toggle');
const html = document.querySelector("html");

check.checked ? html.classList.add('dark') : html.classList.remove('dark');

check.addEventListener('click', () => {
    check.checked ? html.classList.add('dark') : html.classList.remove('dark');
})
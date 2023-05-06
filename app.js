const news = document.querySelectorAll('.news');
const btn = document.querySelectorAll('#btn');

news.forEach((e, b) => {
    e.addEventListener('mouseover', () => (btn[b].style.display = 'block'));
    e.addEventListener('mouseout', () => (btn[b].style.display = 'none'));
});
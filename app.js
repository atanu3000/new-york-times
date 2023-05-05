const news = document.querySelector('.news');
const btn = document.querySelector('#btn');

news.addEventListener('mouseover', () => btn.style.display = 'block');
news.addEventListener('mouseout', () => btn.style.display = 'none');

const apiKey = 'O0RhBQBVGLfvp60MJIn8o5KaoucVaZOi';
const rows = document.querySelectorAll('.row');
const viewBtns = document.querySelectorAll('.viewBtn');
const search = document.querySelector('#searchNews');
const searchBtn = document.querySelector('#searchBtn');

rowItems = {
    rowName: ["sports", "automobiles", "politics", "movies", "world"]
}

rowItems.rowName.forEach((element, i) => {
    defaultNews(element, i)
});

function defaultNews(topics, rowNum) {
    const url = `https://api.nytimes.com/svc/topstories/v2/${topics}.json?api-key=${apiKey}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (i = 1; i <= 6; i++) {

                let html = `<div class="news">
                        <div class="img">
                            <img src="${data.results[i].multimedia[0].url}"/>
                        </div>
                        <h3>${data.results[i].title}</h3>
                        <a href="${data.results[i].url}" target="_blank" ><button id="btn">read more</button></a>
                    </div>`;
                $(rows[rowNum]).append(html);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

viewBtns.forEach((element, i) => {
    let keyword = rowItems.rowName[i]
    element.addEventListener('click', () => getNews(keyword));
});

searchBtn.addEventListener('click', () => {
    let searchKey = search.value.trim();
    if (searchKey === ''){
        alert('Search for nothing');
    }
    else {
        getNews(searchKey);
    }
});

function getNews(searchKey) {
    $('.news-wrapper').text("");
    const url = `https://api.nytimes.com/svc/topstories/v2/${searchKey}.json?api-key=${apiKey}`;
    let allNews = '';
    fetch(url)  // todo: fixed the 404 not found error
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (i = 1; i < data.results.length; i++) {
                let news = `
                    <div class="news">
                    <div class="img">
                        <img src="${data.results[i].multimedia[0].url}"/>
                    </div>
                    <h3>${data.results[i].title}</h3>
                    <a href="${data.results[i].url}" target="_blank" ><button id="btn">read more</button></a>
                    </div>`;                
                allNews += news;
                console.log(data.results[i].multimedia[0].url); // todo: caught (in promise) TypeError: Cannot read properties of null (reading '0')
            }
            $('.news-wrapper').append(`<div class="row"> ${allNews} </div>`);
        })
        .catch(error => {
            alert('Not Found')
            console.log(error);
        });
}
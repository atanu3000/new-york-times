const apiKey = 'O0RhBQBVGLfvp60MJIn8o5KaoucVaZOi';
let rows = document.querySelectorAll('.row');
let viewBtns = document.querySelectorAll('.viewBtn');

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

// function getNews() {
//     $('.posts').text("");
//     let keyword = $('#keyword').val();
//     const search_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${apiKey}`;
//     console.log(search_url);
//     if (keyword == '') {
//         alert("Please input something!");
//         defaultNews();
//     } else {
//         fetch(search_url)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 for (i = 0; i < data.response.docs.length; i++) {
//                     let html = `<div class="news">
//                     <div class="img">
//                         <img src="${data.results[i].multimedia[0].url}"/>
//                     </div>
//                     <h3>${data.results[i].title}</h3>
//                     <a href="${data.results[i].url}" target="_blank" ><button id="btn">read more</button></a>
//                 </div>`;
//                     // $('.posts').append(html);
//                 }
//             })
//     }
// }
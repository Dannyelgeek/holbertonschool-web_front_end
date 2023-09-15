function createElement(data) {
   const paragraph = document.createElement('p');
   paragraph.textContent = data;
   document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const stackArticle = new XMLHttpRequest();
    stackArticle.addEventListener('load', callback);
    stackArticle.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    stackArticle.send();
}

queryWikipedia(createElement);

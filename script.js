let quoteText = document.getElementById('quote-text');
let quoteAuthor = document.getElementById('quote-author');


function quoteGenerator() {
    quoteText.textContent = ""
    quoteAuthor.textContent = "";
    quoteAuthor.textContent = 'Loading...';
    let quote = fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "e3eae54fcdmsh45ded2d2e778a39p18de81jsn932a14586604"
    }
  })
  quote.then(response => {
    return response.json();
  }).then(data => {
    quoteText.textContent = '"' + data.content +'"';
    quoteAuthor.textContent = '- '+ data.originator.name;
  }).catch(err => {
    console.log(err);
  });
}

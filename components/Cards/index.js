// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleComponent(item) {

    // instantiate elements 
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = item.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const authorImg = document.createElement('img');
    authorImg.src = item.authorPhoto;

    const authorName = document.createElement('span');
    authorName.textContent = `By ${item.authorName}`;

    // append elements 
    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(authorImg);

    // return 
    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {

    const articles = Object.values(response.data.articles);
    console.log(articles, 'articles')

    const cardsContainer = document.querySelector('.cards-container');

    articles.forEach(function (item) {
        item.forEach(function (item) {
            cardsContainer.append(articleComponent(item))
        })
    });

})
.catch(error => {
    console.log(`error ${error}`)
});


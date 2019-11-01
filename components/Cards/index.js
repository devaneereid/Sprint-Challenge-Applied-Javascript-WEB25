// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response)
        // console.log(response.data.articles);

        const catagories = response.data.articles;
        
        let newArray = []

        for (const catagory in catagories) {
            const articles = catagories[catagory];

            articles.forEach(article => {
                cards.appendChild(createCards(article));
            })
        }
    })
    .catch(error => {
        console.log('Card Data Not Returned', error);
    });


function createCards(item) {
    const newsCards = document.createElement('div'),
        newsHeadline = document.createElement('div'),
        newsAuthor = document.createElement('div'),
        imgContainer = document.createElement('div'),
        newsImg = document.createElement('img'),
        authorName = document.createElement('span');

    newsCards.appendChild(newsHeadline);
    newsCards.appendChild(newsAuthor);
    newsAuthor.appendChild(imgContainer);
    imgContainer.appendChild(newsImg);
    newsAuthor.appendChild(authorName);

    newsCards.classList.add('card');
    newsHeadline.classList.add('headline');
    newsAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    newsHeadline.textContent = item.headline;
    newsImg.src = item.authorPhoto;
    authorName.textContent = `By: ${item.authorName}`;

    return newsCards;
}


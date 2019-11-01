// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const mainHeader = document.querySelector('.header-container');

function Header() {

    const newsHeader = document.createElement('div'),
        newsDate = document.createElement('span'),
        newsTitle = document.createElement('h1'),
        newsTemp = document.createElement('span');

        newsHeader.appendChild(newsDate);
        newsHeader.appendChild(newsTitle);
        newsHeader.appendChild(newsTemp);
        mainHeader.appendChild(newsHeader);
        
        newsHeader.classList.add('header');
        newsDate.classList.add('date');
        newsTemp.classList.add('temp');

        newsDate.textContent = 'SMARCH 28, 2019';
        newsTitle.textContent = "Lambda Times";
        newsTemp.textContent = "98°";

    return Header;
}
mainHeader.appendChild(Header());
// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // instantiate elements
    const header = document.createElement('div')
    header.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';

    const heading = document.createElement('h1');
    heading.textContent = 'Lambda Times';

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98';

    // append elements

    header.append(date, heading, temp);

    // return 

    return header
}

const headerMaker = Header();

const headerContainer = document.querySelector('.header-container');

headerContainer.append(headerMaker)

const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
// Zadanie 6 - Stwórz kompozycję która na tablicy „books” zlicza ilość liter
//  w tytule (title) nie licząc spacji, gdzie strony (pages) są parzyste oraz 
//  genre kończy się na literkę „y”. 

const titleLength = (list) => list.map((book) => book.title.replace(/ /g, "").length);

const evenPages = (list) => list.filter((book) => book.pages % 2 === 0);

const genreEndsWithY = (list) => list.filter((book) => book.genre.endsWith('y'));

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const firstCompose = compose( genreEndsWithY, evenPages,titleLength);
console.log(firstCompose(books));

// Zad 7 - Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.

const positiveRating = (list) => list.filter(book => book.rating > 5).length;

const oddPages = (list) => list.filter(book => book.pages % 2 != 0);

const titleWithNumber = (list) => list.filter(book => /\d/g.test(book.title));

const secondCompose = compose(titleWithNumber, oddPages, positiveRating);
console.log(secondCompose(books));

// Zad 8 - Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).

const secondLongestTitle = (list) => list.map(book => book.title);
const secondLongestTitle2 = (list) => list.sort((a,b) => a.length - b.length).reverse()[1];

const thirdCompose = compose(secondLongestTitle, secondLongestTitle2);
console.log(thirdCompose(books));
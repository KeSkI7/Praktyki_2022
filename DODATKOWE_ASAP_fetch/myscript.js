// Dodatkowe zadanie na 6
fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
    .then((res) => res.json())
    .then((data) => console.log(wynik(data.kids)));

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const specialKid = (even) => even.filter((x) => x % 2 === 0);
const countId = (id) => id.reduce((current, next) => current + next);

const wynik = compose(countId, specialKid);
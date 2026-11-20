let home = document.getElementById('home');
let destinations = document.getElementById('destinations');
let aboutus = document.getElementById('aboutus');


let date = document.getElementById('date');
let country = document.getElementById('country');
let city = document.getElementById('city');
let citydetails = document.getElementById('citydetails');

let continent = document.getElementById('continent');
let famousfood = document.getElementById('famousfood');
let famousplace = document.getElementById('famousplace');
let language = document.getElementById('language');

let exploreCardBtn = document.getElementById('explorecard');

let img = document.getElementById('img');
let badge = document.getElementById('badge');

let prev = document.getElementById('prev');
let dots = document.getElementById('dots');
let next = document.getElementById('next');
var dot;
var dotsElements = [];

let currentIndex = -1;
let items = [
    {
        date: '01 / 04',
        country: 'France',
        city: 'Paris',
        citydetails: 'Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.',
        continent: 'Europe',
        famousfood: 'Croissant, Macarons',
        famousplace: 'Eiffel Tower',
        language: 'French',
        img: 'img/paris.jpg',
        badge: '01'
    },
    {
        date: '02 / 04',
        country: 'JAPAN',
        city: 'Tokyo',
        citydetails: 'Tokyo is a modern city that combines advanced technology with traditional Japanese culture.',
        continent: 'Asia',
        famousfood: 'Sushi, Ramen',
        famousplace: 'Tokyo Tower',
        language: 'Japanese',
        img: 'img/tokyo.jpg',
        badge: '02'
    },
    {
        date: '03 / 04',
        country: 'Italy',
        city: 'Rome',
        citydetails: 'Rome is famous for its ancient history, beautiful architecture and delicious Italian food.',
        continent: 'Europe',
        famousfood: 'Pizza, Pasta',
        famousplace: 'Colosseum',
        language: 'Italian',
        img: 'img/roma.jpg',
        badge: '03'
    },
    {
        date: '04 / 04',
        country: 'Egypt',
        city: 'Cairo',
        citydetails: 'Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.',
        continent: 'Africa',
        famousfood: 'Koshari, Foul',
        famousplace: 'Pyramids',
        language: 'Arabic',
        img: 'img/cairo.jpg',
        badge: '04'
    }
]

createPaginationDots();
nextElement();

next.onclick = () => nextElement();

function nextElement(){
    if(currentIndex == items.length)
        currentIndex = -1;
    currentIndex = ((currentIndex + 1) % 4);
    updateSlide(currentIndex)
    activeDots(currentIndex);
}

prev.onclick = () => prevElement();

function prevElement(){
    if(currentIndex == 0)
        currentIndex = items.length;
    currentIndex = ((currentIndex - 1) % 4);
    updateSlide(currentIndex)
    activeDots(currentIndex);
}

function updateSlide(index){
    let item = items[index];
    date.innerHTML = item.date;
    country.innerHTML = item.country;
    city.innerHTML = item.city;
    citydetails.innerHTML = item.citydetails;
    continent.innerHTML = item.continent;
    famousfood.innerHTML = item.famousfood;
    famousplace.innerHTML = item.famousplace;
    language.innerHTML = item.language;
    img.src = item.img;
    badge.innerHTML = item.badge;
    activeDots(index);
}

function createPaginationDots(){
    for(let i = 0; i < items.length; i++){
        dot = document.createElement('div');
        dot.classList.add('dot');
        dotsElements.push(dot);
        dots.appendChild(dot);

        dot.onclick = ()=>{
            currentIndex = i;
            updateSlide(i);
        }
    }
}

function activeDots(index){
    dotsElements.forEach((d,i) => {
        d.classList.toggle('active', i === index);
    });
}

exploreCardBtn.onclick = ()=>{
    alert(`Discover ${items[currentIndex].city} in ${items[currentIndex].country}!\nFamous Place: ${items[currentIndex].famousplace}`)
}
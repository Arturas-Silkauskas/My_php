// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//     return `${user} favorite city is ${favoriteCity}`;
// }
// getFavoriteCity("Name", "Surname", cities[5]);

let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];

const getFavouriteCity = (name, surname, city) => `${name} ${surname} favorite city is ${city}`

console.log(getFavouriteCity('Arturas', 'Silkauskas', cities[1]));
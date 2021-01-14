
const BASE_URL = 'https://restcountries.eu/rest/v2/';
//const BASE_URL = 'https://restcountries.eu/rest/v2/regionalbloc/';

export function getCountries() {
    return fetch(BASE_URL).then(res => res.json());
    //return fetch(BASE_URL + 'nafta').then(res => res.json());

}

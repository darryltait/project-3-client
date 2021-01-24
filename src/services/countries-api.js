
const BASE_URL = 'https://restcountries.eu/rest/v2/';
// url for hitting regional bloc
//const BASE_URL = 'https://restcountries.eu/rest/v2/regionalbloc/';

export function getCountries() {
    return fetch(BASE_URL).then(res => res.json());
    // url for hitting nafta
    //return fetch(BASE_URL + 'nafta').then(res => res.json());

}

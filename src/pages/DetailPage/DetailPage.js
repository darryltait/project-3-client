import { Link } from 'react-router-dom';

function DetailPage(props) {

    return (
        <div > 
            <h1>{props.code.name}</h1>
            {/* <p>{props.data.alpha3Code}</p> */}
            <h3>Capital: {props.code.capital}</h3>
            <h3>Population: {props.code.population.toLocaleString()}</h3>
            <h3>Subregion: {props.code.subregion}</h3>
            <h3>Size: {Math.floor(props.code.area/2.59).toLocaleString()} mi<sup>2</sup></h3>
            <h3>Borders: {props.code.borders}</h3>
            <h3>Currency: {props.code.currencies[0].name}</h3>
            <img src={props.code.flag} alt={props.code.name} />






        </div>
    )
}

export default DetailPage
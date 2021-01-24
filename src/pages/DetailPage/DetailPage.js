import { Link } from 'react-router-dom';
import styles from './DetailPage.module.css';

function DetailPage(props) {

    return (
        <div className={styles.detailBody}>
        <Link to="/countries">
            <div className={styles.detailCard}> 
                <h2>{props.country.name}</h2>
                <h4>Capital: {props.country.capital}</h4>
                <h4>Subregion: {props.country.subregion}</h4>
                <h4>Population: {props.country.population.toLocaleString()}</h4>
                <h4>Size: {Math.floor(props.country.area/2.59).toLocaleString()} mi<sup>2</sup></h4>
                <h4>Currency: {props.country.currencies[0].name}</h4>
                <img className={styles.detailImage} src={props.country.flag} alt={props.country.name} />

            </div>
        </Link>

        </div>
    )
}

export default DetailPage
import { Link } from 'react-router-dom';
import styles from './DetailPage.module.css';

function DetailPage(props) {

    return (
        <div className={styles.detailBody}>
        <div className={styles.detailCard}> 
            <h2>{props.code.name}</h2>
            {/* <p>{props.data.alpha3Code}</p> */}
            <h4>Capital: {props.code.capital}</h4>
            <h4>Subregion: {props.code.subregion}</h4>
            <h4>Population: {props.code.population.toLocaleString()}</h4>
            <h4>Size: {Math.floor(props.code.area/2.59).toLocaleString()} mi<sup>2</sup></h4>
            {/* <h4>Borders: {props.code.borders}</h4> */}
            <h4>Currency: {props.code.currencies[0].name}</h4>
            <img className={styles.detailImage} src={props.code.flag} alt={props.code.name} />






        </div>

        </div>
    )
}

export default DetailPage
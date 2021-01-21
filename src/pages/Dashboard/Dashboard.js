import Country from './Country';
import styles from './Dashboard.module.css';
import { getCountries } from '../../services/countries-api';




function Dashboard(props) {
    return (
       
        <div className={styles.countryCard}> 
        <h2 className={styles.countryName}>{props.data.name}</h2>
        <h3>Subregion: {props.data.subregion}</h3>
        <h3>Capital: {props.data.capital}</h3>
        <h3>Population: {props.data.population.toLocaleString()}</h3>
        <h3>Size: {Math.floor(props.data.area/2.59).toLocaleString()} mi<sup>2</sup></h3>
        <div className={styles.countryMap}>
            <img src={props.data.flag}/>
        </div>

         </div> 
      
        

        
         
     
            

    )
}

export default Dashboard
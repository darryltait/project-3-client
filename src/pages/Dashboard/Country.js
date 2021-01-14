import React from 'react'

import styles from './Country.module.css';

function Country(props) {
    return (
        <div className={styles.countryCard}>
          
        <h2 className={styles.countryName}>{props.data.name} </h2>
        <h3>Subregion: {props.data.subregion} </h3>
        <h3>Capital: {props.data.capital} </h3>
        <h3>Population: {props.data.population.toLocaleString()} </h3>
        <h3>Size: {Math.floor(props.data.area/2.59).toLocaleString()} mi<sup>2</sup> </h3>

        <div className={styles.countryMap}>
        <img src={props.data.flag}/>
        </div>
        <div className={styles.bottom}>
        <div className={styles.countryBeen}></div>
        <p>Been there?</p>
        <p>Want to go there?</p>
        <div className={styles.countryBeen}></div>

        </div>

      
        </div>
     
    );
}

export default Country; 
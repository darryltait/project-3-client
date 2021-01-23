
import { Link } from 'react-router-dom';

import styles from './Countries.module.css';





function Dashboard(props) {
    return (
        <div className={styles.dashBody}>

        <div className={styles.countryCard}> 
        <h3 className={styles.countryName}>{props.data.name}</h3>
        <div className={styles.countryFlag}>
        <Link  key={props.data.alpha3Code} to={`/countries/${props.data.alpha3Code}`}>
            <img src={props.data.flag} alt={props.data.name} />
        </Link>
        </div>
        </div>

         </div> 
      
        

        
         
     
            

    )
}

export default Dashboard

import { Link } from 'react-router-dom';


import styles from './Home.module.css';

function Home(props) {
    return (
        <div className={styles.HomeBkgImage}> 

        {/* <img className={styles.HomeBkgImage}/> */}
        <Link to="/">
        <div className= "loginSignup">
        <div className={styles.countryCard}>
        <h4>The capital of:</h4>
        <h2>{props.rand.name}</h2>

        <h4>is:</h4>
        <h2> {props.rand.capital}</h2>
        <h4><em>Login</em> and <em>Click</em> on the card </h4>
        <h4>of a country to find out </h4>
         <h4>  some info about it</h4>
        
        

        
        </div>
        </div>
            </Link>
       
        </div>
    )
}

export default Home
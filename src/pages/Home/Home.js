import styles from './Home.module.css';

function Home(props) {
    return (
        <div className={styles.HomeBkgImage}> 

        {/* <img className={styles.HomeBkgImage}/> */}
        <div className= "loginSignup">
        {/* <div className={styles.countryCard}> */}
        <h4>Here's some info on:</h4>
        <h2>{props.rand.name}</h2>

        <h3>Capital: {props.rand.capital}</h3>
        <h4>Login and Click on the flag of a country </h4>
         <h4> to find out some info on it</h4>
        
        

        <h1></h1>
        </div>
       
        </div>
    )
}

export default Home
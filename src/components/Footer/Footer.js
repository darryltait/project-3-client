import styles from './Footer.module.css';

function Footer(props) {
    return (

        <footer className={styles.Footer}>
            <p>Copyright &copy; {new Date().getFullYear()} Project 3 Dareal</p>
        </footer>
    )
    
}

export default Footer
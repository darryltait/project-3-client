import styles from './Footer.module.css';

function Footer(props) {
    return (

        <footer className={styles.Footer}>
            <p>Copyright &copy; {new Date().getFullYear()}  &nbsp;&nbsp;&nbsp; Where in the World</p>
        </footer>
    )
    
}

export default Footer
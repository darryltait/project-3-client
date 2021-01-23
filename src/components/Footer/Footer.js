import styles from './Footer.module.css';

function Footer(props) {
    return (

        <footer className={styles.Footer}>
            <p>Copyright &copy; {new Date().getFullYear()}  &nbsp;&nbsp;&nbsp; Countries of the World</p>
        </footer>
    )
    
}

export default Footer
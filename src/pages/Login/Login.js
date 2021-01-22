import { useState } from 'react';
import { login } from '../../services/userService';

import styles from '../Home/Home.module.css';



function Login(props) {
    
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }
     async function handleSubmit(event) {
         try {
             event.preventDefault();
             //console.log('submitted form data: ', formState)
             await login(formState);
     
             setFormState({
                 email: '',
                 password: '',
             });
             // test that user doesnt get added to state without this
             props.handleSignupOrLogin();
             props.history.push('/dashboard');
             
         } catch (error) {
             alert(error.message);
         }
    }
    return (
        <div className={styles.HomeBkgImage}> 

        {/* <div className="Page"> */}
        <div className="loginSignup">
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                placeholder="Email Address"
                />
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                placeholder="Password"

                />
                <button>Login!</button>
            </form>

        </div>
        {/* </div> */}
        </div>
    );
}

export default Login;
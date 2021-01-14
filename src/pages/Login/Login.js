import { useState } from 'react';
import { login } from '../../services/userService';


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
        <div className="Page">
        <h2>LEts log in</h2>
            <form onSubmit={handleSubmit}>
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type="email" 
                />
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type="password" 
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
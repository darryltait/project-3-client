import { useState } from 'react';
import { signup } from '../../services/userService';

function Signup(props) {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
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
             await signup(formState);
     
             setFormState({
                 firstName:'',
                 lastName:'',
                 email: '',
                 password: '',
             });
             props.history.push('/dashboard');
             
         } catch (error) {
             alert(error.message);
         }
    }
    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <input 
                value={formState.firstName} 
                onChange={handleChange} 
                name="firstName" 
                type="text" 
                />
                <input 
                value={formState.lastName} 
                onChange={handleChange} 
                name="lastName" 
                type="text" 
                />
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
                <button>Sign Up</button>
            </form>
        </div>
    );
}
export default Signup;
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
             // test that user doesnt get added to state without this
             props.handleSignupOrLogin();
             props.history.push('/dashboard');
             
         } catch (error) {
             alert(error.message);
         }
    }
    return (
        <div className="Page">
        <div className="inputBox">
                <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <input 
                value={formState.firstName} 
                onChange={handleChange} 
                name="firstName" 
                placeholder="First Name"
                type="text" 
                />
                <input 
                value={formState.lastName} 
                onChange={handleChange} 
                name="lastName" 
                placeholder="Last Name"

                type="text" 
                />
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                placeholder="Email"

                type="email" 
                />
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password"
                placeholder="Password"
 
                type="password" 
                />
                <button>Sign Up!</button>
            </form>

        </div>
        </div>
    );
}
export default Signup;

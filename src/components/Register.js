import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { saveToken, saveUser } from './config/Storage';
import { BASE_URL } from './config/Api';
import { Redirect } from 'react-router';


const Register = () => {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
   


const submitForm = async (event) => {
        event.preventDefault();

        const register = await fetch( BASE_URL + "/auth/local/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username, email: email, password: password})
        });

        const registerContent = await register.json();
      

      if (registerContent.user) {
        saveToken(registerContent.jwt);
        saveUser(registerContent.user);

    }
          
   setRedirect(true);
   window.location.reload();
    }

 if (redirect) {
        return <Redirect to="/Login" />
    }

   

    return (
        <Container className="mt-5">
        <Form className="w-50" onSubmit={submitForm}>
            <h1>Please register</h1>
            <input type="username" className="form-control mb-3" placeholder="username" required 
                onChange={event => setUsername(event.target.value.trim())}
            />            
            <input type="email" className="form-control mb-3" placeholder="Email" required 
                onChange={event => setEmail(event.target.value.trim())}
            />
            <input type="password" className="form-control mb-3" placeholder="Password" required 
                onChange={event => setPassword(event.target.value.trim())}
            />
            <Button className="btn btn-outline-dark text-white" type="submit">Register</Button>
        </Form>
        </Container>
    );

    }


export default Register;





       


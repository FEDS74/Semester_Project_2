import { useState } from 'react';
import displayMessage from './config/displayMessage';
import { Form, Button, Container } from 'react-bootstrap';
import { saveToken, saveUser } from './config/Storage';
import { BASE_URL } from './config/Api';
import { Redirect } from 'react-router';



const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
   


    const submitForm = async (event) => {
        event.preventDefault();

       
         
        const login = await fetch( BASE_URL + "/auth/local", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ identifier: email, password})
        });

        const loginContent = await login.json();
      

      if (loginContent.user) {
        saveToken(loginContent.jwt);
         saveUser(loginContent.user);

    }
          
   setRedirect(true);
   window.location.reload();
    }

 if (redirect) {
        return <Redirect to="/" />
    }

   

    return (
        <>
        <Container className="mt-5">
                <Form className="w-50" onSubmit={submitForm}>
                    <h1>Please login</h1>
                    <div className="input-group flex-nowrap mb-3">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input type="email" class="form-control" placeholder="email" aria-label="email" aria-describedby="addon-wrapping" required
                        onChange={event => setEmail(event.target.value.trim())}/>
                    </div>

                    <div className="input-group flex-nowrap mb-3">     
                    <span className="input-group-text" id="addon-wrapping">P</span>         
                    <input type="password" class="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" required
                        onChange={event => setPassword(event.target.value.trim())} />
                    </div>
                    <Button className="btn btn-outline-dark text-white" type="submit">Login</Button>
                </Form>
            </Container>
            </>
    );

}

export default Login;
















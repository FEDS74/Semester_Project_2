import React, { useState, useForm } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { getUsername } from './config/Storage';
import { getToken } from './config/Storage';
import displayMessage from './config/displayMessage';
import { Redirect } from 'react-router';


import { BASE_URL } from './config/Api';
import './AddProducts.css';



const AddProducts = () => {

    const username = getUsername();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const changeHandler = (event) => {
         
         setSelectedFile(event.target.files[0]);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        event.target.reset();

     

        if (title.length === 0 || price.length === 0 || isNaN(price) || description.length === 0 || selectedFile.length === 0) {
            return console.warn("Fill inn form!");
        }


            const urlAdd = BASE_URL + "/products";
            const token = getToken();

            const data = JSON.stringify({ title: title, price: price, description: description, featured: checked, image: selectedFile });
            console.log(data);
            
            

            try {
                const response = await fetch(urlAdd, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                console.log(response);

            } catch (error) {
                console.log(error);
            }
            setRedirect(true);
    }

     if (redirect) {
        return <Redirect to="/Products" />
    }

        return (
            <> < h1 className = "display-6 fw-bolder text-center mb-4 pt-4 mt-4 pt-4 pb-2" > 
            Welcome, { username } to your Upload page</h1> < div className = "message-container" > </div>
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1 className="mb-4">Add Products</h1>
                <input
                    id="image"
                    className="form-control mb-4"
                    type="file"
                    accept="image/*"
                    name="selectedFile"
                    onChange={changeHandler}/>
                <div className="d-flex">
                    <h6 className="pe-5 me-5">Featured no / yes</h6>
                    <input
                        id="featured"
                        className="form-check-input mt-0 mb-4"
                        aria-label="Checkbox for following text input"
                        type="checkbox"
                        name="checked"
                        value={checked}
                        onChange={(event) => setChecked(event.target.checked)}/>
                </div>
                <label>Title</label>
                <input
                    id="title"
                    className="form-control mb-4"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}/>
                    <label>Price</label>
                <input
                    id="price"
                    className="form-control mb-4"
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}/>
                    <label>Description</label>
                <textarea
                    id="description"
                    className="form-control mb-4"
                    type="input"
                    name="message"
                    rows="6"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}/>
                <Button className="btn btn-outline-dark text-light fw-bold mb-5" type="submit">Verify Upload</Button>

            </Form>
        </Container>
    </>
        );
}
export default AddProducts;



import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {Container, Row, Form, Button} from 'react-bootstrap'
import { getUsername } from './config/Storage';
import { getToken } from './config/Storage';
import displayMessage from './config/displayMessage';
import { Redirect } from 'react-router';

import { BASE_URL } from './config/Api';

import './Details.css';

const EditProducts = () => {

        const username = getUsername();

        const [editsId, setEditsId] = useState('')
        const [title, setTitle] = useState('');
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState('');
        const [checked, setChecked] = useState(false);
        const [selectedFile, setSelectedFile] = useState(null);
        const [redirect, setRedirect] = useState(false);

        const {id} = useParams();
        const [loading, setLoading] = useState(false);

        const url = `http://localhost:1337/products/${id}`;

        useEffect( () => {
            (async () => {
                    setLoading(true);
                    const response = await fetch(url);
                    const getProducts = await response.json();
                        setEditsId(getProducts.id);
                        setTitle(getProducts.title);
                        setPrice(getProducts.price);
                        setDescription(getProducts.description);
                        setChecked(getProducts.featured);
                    setLoading(false);
                    console.log(getProducts);
             
            }
            )();


                console.log(title);
                console.log(price);
                console.log(description);
                console.log(checked);
               console.log(selectedFile);

        }, []);

        const Loading = () => {
            return(
            <>
                Loading...
            </>
            )
        }

        

        const changeHandler = () => {
 
    }


    const submitEdit = async (event) => {
        event.preventDefault();

        
         if (title.length === 0 || price.length === 0 || isNaN(price) || description.length === 0 || editsId.length === 0) {
            return console.warn("Fill inn form!");
        }
    
            
            const token = getToken();

            const data = JSON.stringify({ title: title, price: price, description: description, featured: checked, id: editsId });
            console.log(data);
            
            

            try {
                const response = await fetch(url, {
                    method: 'PUT',
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


        };

 if (redirect) {
        return <Redirect to="/Products" />
    }


    const submitDelete = async (event) => {
        event.preventDefault();

            
            const token = getToken();

            const data = JSON.stringify({ title: title, price: price, description: description, featured: checked, id: editsId });
            console.log(data);
            
             if (window.confirm('Do you really want to delete this product?')) {


            try {
                const response = await fetch(url, {
                    method: 'DELETE',
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
    };

 if (redirect) {
        return <Redirect to="/Products" />
    }

            const ShowEdits = () => {
                            return (
            <> < h1 className = "display-6 fw-bolder text-center mb-4 pt-4 mt-4 pt-4 pb-2" > 
            Welcome, { username } to your Edits Page</h1> < div className = "message-container" > </div>
        <Container>
            <Form >
                <h1 className="mb-4">Edit Products</h1>
                <label>ID</label>
                <input className="form-control mb-4" id="id" type="text" name="editsId" value={editsId} disabled />
               <input id="image" className="form-control mb-4" type="file" accept="file" name="selectedFile" value={selectedFile} onChange={(event) => setSelectedFile(event.target.files[0])}/>
                <div className="d-flex">
                    <h6 className="pe-5 me-5">Featured no / yes</h6>
                    <input
                        id="featured"
                        className="form-check-input mt-0 mb-4"
                        aria-label="Checkbox for following text input"
                        type="checkbox"
                        defaultChecked={checked}
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
                    autofocus
                    id="description"
                    className="form-control mb-4"
                    type="input"
                    name="message"
                    rows="6"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}/>
                <Button onClick={submitEdit} className="btn btn-outline-dark text-light fw-bold mb-5 me-4" type="submit">Edit product</Button>
                <Button onClick={submitDelete} className="btn btn-danger text-light fw-bold mb-5" type="submit">Delete product</Button>
            </Form>
        </Container>
    </>
        );
    }

    return (
        <div>
            <Container>
                <Row>
                       {loading ? <Loading /> : <ShowEdits />}
                </Row>
            </Container>
        </div>
    )
}


export default EditProducts;




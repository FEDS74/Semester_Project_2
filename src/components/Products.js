import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';
import { getUsername } from './config/Storage';


import './FeaturedProducts.css';
import { BASE_URL } from './config/Api';




const Product = () => {

    const username = getUsername();

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(BASE_URL + "/products");
                setFilter(await response.json());
                setLoading(false);
        } 

        getProduct();
    }, []);

    const Loading = () => {
        return (
        <> 
            Loading...
        </>
        )
    }

    const ShowProducts = () => {
        let user = JSON.parse(localStorage.getItem('user'));

        return(
            <>
            {/* <div className="buttons justify-content-center mb-5">
                <button className="btn btn-outline-dark me-3">Test1</button>
                <button className="btn btn-outline-dark me-3">Test2</button>
            </div> */}
            {filter.map((product) => {
            return(
               
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 card-container" key={product.id}>
                    <Card className="text-center">
                        <Card.Img variant="top" src={`http://localhost:1337${product.image_url}`} alt={product.title} height="250px" width="250px"/>
                        <Card.Body>
                            <Card.Title key={Product.title}>{product.title}</Card.Title>
                            <Card.Text>
                                $ {product.price}
                            </Card.Text>
                            {
                                username?
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Edit</NavLink>
                                :
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Details</NavLink>
                            }
                        </Card.Body>
                    </Card>
                    </div>
        
             
            );
        })}
    
            </>
        );
    };
    return (
        <>
            <div className="md-my-0 my-3 md-py-0 py-3 container-md">
                <div className="row">
                    <div className="col-12 mb-5 mt-4">
                        <h1 className="display-6 fw-bolder text-center mb-4 pb-2">Our Products</h1>
                        <div className="main">
                        {loading ? <Loading/> : <ShowProducts/>}      
                        </div>       
                    </div>
                </div>
            </div>
        </>
    );
}


export default Product;

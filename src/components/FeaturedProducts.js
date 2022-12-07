import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { getUsername } from './config/Storage';

import { BASE_URL } from './config/Api';

import './FeaturedProducts.css';




const Featured = () => {

    const [dataFeatured, setDataFeatured] = useState([]);
    const [loading, setLoading] = useState(false);

 

    useEffect(() => {
        const getFeaturedProducts = async () => {
            setLoading(true);
            const response = await fetch(BASE_URL + "/products");

            setDataFeatured(await response.json());

            setLoading(false);
   
        }
        getFeaturedProducts();
    }, []);


    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    }
const ShowFeaturedProducts = () => {

    const username = getUsername();

    return(
        <>
                {dataFeatured.map((featured)=> {

        const isFeatured = featured.featured;
         if( isFeatured === true) {
                    return(
               <>
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 card-container" key={featured.id}>
                    <Card className="text-center">
                        <Card.Img key={featured.image_url} variant="top" src={`http://localhost:1337${featured.image_url}`} alt={featured.title} height="250px"/>
                        <Card.Body>
                            <Card.Title key={featured.title}>{featured.title}</Card.Title>
                            <Card.Text key={featured.text}>
                                $ {featured.price} 
                            </Card.Text>
                             {
                                username?
                                <NavLink to={`/products/${featured.id}`} className="btn btn-outline-dark">Edit</NavLink>
                                :
                                <NavLink to={`/products/${featured.id}`} className="btn btn-outline-dark">Details</NavLink>
                            }
                        </Card.Body>
                    </Card>
                    </div>
                </> 
                )
         }else {
       
         }
         

        
             })}
            
        </>
    )
}
    return (
        <>
            <div className="my-3 py-3 container-md">
                <div className="row">
                    <div className="col-12 mb-5 mt-4">
                        <h1 className="display-6 fw-bolder text-center mb-4 pb-2">Featured Products</h1>
                        <div className="main">
                        {loading ? <Loading/> : <ShowFeaturedProducts/>}      
                        </div>       
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Featured;

  



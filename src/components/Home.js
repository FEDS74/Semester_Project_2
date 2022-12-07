import {Button, Container} from 'react-bootstrap';
import { Image } from "react-bootstrap";
import Featured from './FeaturedProducts';

import './Home.css'; 
import heroImageCropped from '../Images/puppyToyCropped.jpg';


function Home() {


    
   
  return (
<div className="home">
    <div className="card bg-dark text-white border-0">
        <Image src={heroImageCropped} className="hero-img card-img border-radius-0" alt="image of dog" fluid/>
            <div className="card-img-overlay d-flex justify-content-start">
                <div className="hero-container fluid">
                <h1 className="card-title display-3 fw-bolder text-light">Dog Shop</h1>
                <p className="card-text lead fs-3">
                    <span>Newer | Better | Stronger</span>
                </p>
                <Button href="/products" className="hero-btn" variant="primary">Come inside</Button>
                </div>
            </div>
        </div>

        <Featured/>
    </div>
  );
}

export default Home;



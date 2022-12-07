
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {Container, Row, Col, Tabs, Tab, Nav} from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Details.css';

const Details = () => {



        const {id} = useParams();
        const [detail, setDetail] = useState([]);
        const [loading, setLoading] = useState(false);


        useEffect(() => {
            const getDetails = async () => {
                setLoading(true);
                const response = await fetch(`http://localhost:1337/products/${id}`);
                setDetail(await response.json());
                setLoading(false);
                console.log(response);
            }
            getDetails();
        }, []);

        const Loading = () => {
            return(
            <>
                Loading...
            </>
            )

        }

            const ShowDetails = () => {
                            return(
                                <>
                                    <Nav className="mr-auto">
                                        <NavLink className="nav-link back-nav" to="/products">Back to Products</NavLink>
                                    </Nav>
                                    <Container>
                                        <h3 className="mt-5">Details page</h3>
                                        <><Row className="mt-5 mb-5" >
                                            <Col className="mb-4" md={6}>
                                                <Container className="container-col1 lg-mr-auto">
                                                    <Image src={`http://localhost:1337${detail.image_url}`} fluid="fluid" />
                                                </Container>
                                            </Col>
                                            <Col md={6}>
                                                <Container className="container-col2 pb-2">
                                                    <h2>{detail.title}</h2>
                                                    <h4>Price: $ {detail.price}</h4>
                                                    <NavLink to="" variant="primary">Add to Cart</NavLink>
                                                </Container>
                                            </Col>
                                        </Row><Tabs className="mt-4" defaultActiveKey="details" id="uncontrolled-tab-example">
                                                <Tab className="mt-5 mb-5" eventKey="details" title="Details">{detail.description}</Tab>
                                                <Tab className="mt-5 mb-5" eventKey="reviews" title="Reviews">Reviews...</Tab>
                                            </Tabs></>
                                    </Container>
                                </>
                            )
            }

    return (
        <div>
            <Container>
                <Row>
                       {loading ? <Loading /> : <ShowDetails />}
                </Row>
            </Container>
        </div>
    )
}


export default Details;




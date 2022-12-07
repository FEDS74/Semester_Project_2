import React from 'react'

function Cart() {

    const [showCanvas, setShowCanvas] = useState(false);
    const handleCloseCanvas = () => setShowCanvas(false);
    const handleShowCanvas = () => setShowCanvas(true);

    return (
        <div>
                  <Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
        <Offcanvas.Header className="mb-2">
            <div className="d-flex">
            <div onClick={handleCloseCanvas} className="ml-auto btn-blank">X</div>
            </div>
          <Offcanvas.Title className="d-flex justify-content-between align-items-center ml-3 mr-3 mt-3">
              <span className="text-primary">cart items</span>
              <span className="text-white rounded-circle bg-primary badge">3</span>
              </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mt-2 border d-flex justify-content-between">
            <Container className="p-3 mt-4 mb-4">
                    <ul className="list-group">
                        <li className="list-group-item p-4 d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Product</h6>
                                <small className="text-muted">description</small>
                            </div>
                            <div>
                            <h6 className="my-0 px-2">$30</h6>  
                            <span className="px-1">+</span>
                            <small className="text-white rounded-pill bg-primary badge">1</small>
                            <span className="px-1">-</span>
                            </div>
                        </li>
                        <li className="list-group-item  p-4 d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Product</h6>
                                <small className="text-muted">description</small>
                            </div>
                            <div>
                            <h6 className="my-0 px-2">$30</h6>  
                            <span className="px-1">+</span>
                            <small className="text-white rounded-pill bg-primary badge">1</small>
                            <span className="px-1">-</span>
                            </div>
                        </li>
                        <li className="list-group-item  p-4 d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Product</h6>
                                <small className="text-muted">description</small>
                            </div>
                            <div>
                            <h6 className="my-0 px-2">$30</h6>  
                            <span className="px-1">+</span>
                            <small className="text-white rounded-pill bg-primary badge">1</small>
                            <span className="px-1">-</span>
                            </div>
                        </li>
                        <li className="list-group-item  p-4 d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Product</h6>
                                <small className="text-muted">description</small>
                            </div>
                            <div>
                            <h6 className="my-0 px-2">$30</h6>  
                            <span className="px-1">+</span>
                            <small className="text-white rounded-pill bg-primary badge">1</small>
                            <span className="px-1">-</span>
                            </div>
                        </li>
                    </ul>
            </Container>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}


export default Cart;
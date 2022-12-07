import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarComp';
import Home from './components/Home';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router';
import Products from './components/Products';
import Details from './components/Details';
import Login from './components/Login';
import AddProducts from './components/AddProducts';
import EditProducts from './components/EditProducts';
import Register from './components/Register';
import { getUsername } from './components/config/Storage';


function App() {

    const username = getUsername();

  
    
    return (
  <> 
    <div className="app-header">
      <div className="content-wrap">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Products" component={Products}/>

            {
              username ?
            <Route exact path="/Products/:id" component={EditProducts}/>
              :
            <Route exact path="/Products/:id" component={Details}/>  
            }
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>            
            <Route exact path="/AddProducts" component={AddProducts}/>                      
        </Switch>
        </div>
        <Footer/>
        <div/>
    </div>
  </>
  );
  }

export default App;
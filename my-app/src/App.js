import React from 'react';

import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';
import Header from "./components/Header";
import Main from "./components/Main";
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';

function App() {
  return (
    <>

     <Nav/>
     
     <Main/>
      <Menu/>
     <Footer/>
    
    </>
  );
}
 
export default App;

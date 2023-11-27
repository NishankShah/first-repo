import React from 'react';
import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import Heading from "./Heading";
import Main from "./Main";


function App() {
  return (
    <div className="App">
      <Heading />
     
      <Nav />

      <Main />
      
      <Footer />
    </div>
  );
}
 
export default App;

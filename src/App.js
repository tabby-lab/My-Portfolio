import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './components/aboutme';
import Contact from './components/contact';


function App() {
  return (
    <>
   

    <Router>
 <Navbar />
    <Route exact path={["/","/aboutme"]} component={AboutMe} />
    <Route exact path={["/","/contact"]} component={Contact} />
</Router>

    
     </>
  );
}

export default App;

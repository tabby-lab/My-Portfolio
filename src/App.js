import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <>
   

    <Router>
 <Navbar />

 <Switch>
    <Route exact path={["/","/aboutme"]} component={AboutMe} />
    <Route exact path={["/","/contact"]} component={Contact} />
    </Switch>
    <Footer />
</Router>

    
     </>
  );
}

export default App;

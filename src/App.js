import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/header.jsx';
import HomePage from './components/HomePage/homePage.jsx';
import APropos from './components/APropos/APropos.jsx';
import Gallery from './components/Gallery/gallery.jsx';
import Contact from './components/Contact/contact.jsx';
import Footer from './components/Footer/footer.jsx';


function App() {
  return (
    <Router>
      <Header />
      <HomePage></HomePage>
      <APropos></APropos>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </Router>
  );
}

export default App;

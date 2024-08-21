import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Catalog from '../components/Catalog';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Navbar />
      <div id="welcome">
        <Welcome />
      </div>
      <div id="catalog">
        <Catalog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;

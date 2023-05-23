import React from 'react';
import headerBackground from './Assets/vallebackground.jpg'
//normally we do this -import brand from './components/brand/brand'- to import components, but there is another way more clean and easier 
//so better go to the component folder and create a file calledd index.js --> and IMPORT the components as below
import { Blog, Features, Footer, Header, Probability, Whatgpt } from './containers';
import { CTA, Brand, Navbar, Productsmod, Heroproduct, Productspecs } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg' style={{
          width: '100%',
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: 'cover',
        }}>

        <Navbar />
        <Header />
        </div>
        {/* <Brand/> */}
        <Features/>
        <Whatgpt/>
        <Probability/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
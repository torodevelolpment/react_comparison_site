import React from 'react';
//normally we do this -import brand from './components/brand/brand'- to import components, but there is another way more clean and easier 
//so better go to the component folder and create a file calledd index.js --> and IMPORT the components as below
import { Blog, Features, Footer, Header, Probability, Whatgpt } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
        <Brand/>
        <Whatgpt/>
        <Features/>
        <Probability/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
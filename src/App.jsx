import React, { useState } from 'react';
import { AiFillApple } from "react-icons/ai";
// import './App.css';
import Header from './components/Header'
import LessonsInsight from './components/LessonsInsight';
import Footer from './components/Footer';
import Goodmorning from './components/goodmorning';

function App() {
  return (<>
  <Goodmorning />
    {/* <Header />
    <LessonsInsight />

    <div className='text-3xl font-bold underline px-10 pt-[84px] ' > <AiFillApple /> fHello World</div>
    <Footer /> */}
  </>
  );
}

export default App;

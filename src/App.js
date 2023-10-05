import React from 'react';
// components
import Router from "./components/Routes"
import AnimatedCursor from "react-animated-cursor"
import { Route, Routes } from 'react-router-dom';
import EhizuaLearn from './components/pages/EhizuaLearn';
import Hornets from './components/pages/Hornets';
import Portfolio from './components/pages/Portfolio';
import Ecommerce from './components/pages/Ecommerce';

const App = () => {
  return (
    <div className=''>
       <AnimatedCursor
      innerSize={4}
      outerSize={70}
   
      outerAlpha={0.2}
      innerScale={3}
      outerScale={0.2}
      outerStyle={{
        border: '3px solid white'
      }}
      innerStyle={{
        backgroundColor: 'pink'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
     <Routes>
      <Route path="/" element={<Router/>}/>
      <Route path="/pro1" element={<Portfolio/>}/> 
      <Route path="/pro2" element={<Hornets/>}/> 
      <Route path="/pro3" element={<Ecommerce/>}/> 
      <Route path="/pro4" element={<EhizuaLearn/>}/> 
     </Routes>
      
    </div>
  );
};

export default App;

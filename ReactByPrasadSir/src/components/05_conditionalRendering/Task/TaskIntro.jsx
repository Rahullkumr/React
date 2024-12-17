import React from 'react'
import Homepage from './Homepage';
import Contact from './Contact';
import About from './About';
import PageNotFound from '../examples/PageNotFound';

const TaskIntro = () => {
  let userName = prompt('Enter username');
  let pageName = prompt('Enter page name u want to visit (homepage, contact or about)');
  switch (pageName) {
    case  'homepage':  
      return <Homepage prop={userName}/>      
      // break;
    case 'contact': 
      return <Contact prop={userName}/>
      // break;
    case 'about':
      return <About prop={userName}/> 
      // break; 
    default:
      return <PageNotFound/>
      // break;
  }
}

export default TaskIntro


// break in new react version
import Home from './Home';
import PageNotFound from './PageNotFound';

const ConditionalEx1 = () => {
// localStorage.setItem('username','xyz@123')
   let uName = localStorage.getItem('username')
   console.log(uName);
   if (uName == 'xyz@12') {
    return <Home/>
   }else{
    return <PageNotFound/>
   }
   
}

export default ConditionalEx1

// 10-12 room 6/3/2
// room 3

// task
// `
// - uname+pagename take input using prompt
// switch case(pagename == home){
//     <Home prop={uname}/>
// }
//     default ===> page not found call kro



// homepage
// ________________
// Home page
// welcome 
// username
// `
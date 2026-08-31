import {useState} from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'

function App() {
   
   const [count , setCount] = useState(0);

   return ( 
    <>
      <Header count ={count}></Header>
      <Body count={count}  setCount={setCount}></Body>
      <Footer></Footer>
    </>
   )
}

export default App;

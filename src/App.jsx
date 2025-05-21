import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
 const [count, setCount] = useState(0)

  return (
       
      <>
        <NavBar />
        <Home />
      </>
      
  )

}

export default App

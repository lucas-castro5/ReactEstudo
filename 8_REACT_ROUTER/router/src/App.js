// config react router
import {BrowserRouter, Routes,Route} from 'react-router-dom'

// css
import './App.css';

// Components
import Navbar from './components/Navbar';

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
        <h1>React Routers</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products/:id' element={<Product/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Info from './pages/Info';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

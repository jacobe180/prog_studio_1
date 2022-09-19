import './App.css';
import Header from './Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


// Import pages 
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

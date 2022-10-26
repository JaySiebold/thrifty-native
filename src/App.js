import './App.css';
import Products from "./components/Products" // 
import About from "./components/About"
import Home from "./components/Home"
import {
    Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import NavBar from "./components/NavBar"

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBar />

          <Routes>
                <Route path="/products" element={ <Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Home />} />
          </Routes>
        </header>
      </div>
  );
}

export default App;

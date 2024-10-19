import './App.css';
import {Routes, Route} from "react-router-dom";
import FavouriteMovie from './components/FavouriteMovie';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="header">Movie App</div>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/favourite" element={<FavouriteMovie />} />
      </Routes>
    </div>
  );
}

export default App;

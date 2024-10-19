import {Link} from "react-router-dom";
import '../App.css';

function NavBar() {
  return (
    <div className="navBar">
       <Link to="/">
          <h3>Movie List</h3>
      </Link>
      <div>
          <Link to="/favourite">
            <h3>Favourites</h3>
          </Link>
      </div>
    </div>
  );
}

export default NavBar;

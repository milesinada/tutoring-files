import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storecontext";
import Weather from "./weather.jsx";

const NavBar = () => {
  //console.log ("Your current position is :"+ <GeoFind/>);
  const { cart, user } = useContext(storeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about" tabIndex="-1">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/admin" tabIndex="-1">
                Admin
              </Link>
            </li>
          </ul>
          <Weather />
          <form className="d-flex">
            <Link
              className="btn btn-outline-light position-relative view-cart"
              to="/cart"
            >
              View Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

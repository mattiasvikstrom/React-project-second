import "./Navigation.css";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { useContext } from "react";
import { Profile } from "../Profile/Profile";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  };
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <Profile />
    ) : (
      <li class="nav-item">
        <Link class="nav-link" to="/signin">
          Sign in
        </Link>
      </li>
    );
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Dragna Drag
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/search">
                Search page
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <ul class="navbar-nav user-align">
            {displayUserIfAuthenticated()}
            </ul>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

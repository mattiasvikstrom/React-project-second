import "./App.css";
import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext, UserProvider } from "./shared/global/provider/UserProvider";
import Navbar from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import AboutView from "./Views/AboutView/AboutView";
import Products from "./components/Products/Products";
import Search from "./components/Search/Search";
import MovieView from "./Views/MovieView/MovieView";
import { SignInView } from "./Views/SignInView/SignInView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("Avengers");

  useEffect(() => {
    if(searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3255eeaf8a6e0ad9884eca1fe75a2ba7&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <UserProvider>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/products" component={Products} />
        <Route path="/signin" component={SignInView} />
        <Route path="/search">
          <Search keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
      </UserProvider>
    </div>
  );
}

export default App;

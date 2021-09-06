import './App.css';
import Navbar from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import AboutView from './components/AboutView/AboutView';
import Products from './components/Products/Products'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  )
}

export default App;

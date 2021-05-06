import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Shoppingcart from "./Pages/Shoppingcart"
import Note from "./Pages/Note"
import Service from "./Pages/Service"
import ProductList from "./Pages/ProductList"
function App() {

  return (

    <Router>
      <div className="App">

        <main>
          <Switch>

            <Route exact path='/'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <Route path="/shoppingcart"><Shoppingcart /></Route>
            <Route path='/product'><ProductList /></Route>
            <Route path='/note'><Note/></Route>
            <Route path='/service'><Service/></Route>
            <Route path='*'> <NotFound /> </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

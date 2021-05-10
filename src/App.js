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
import Contact from "./Pages/Contact"
import Categorylist from "./Pages/category"
import ProductList from "./Pages/ProductList"
import NewProduct from "./Pages/NewProduct"
import Signup from "./Pages/Signup"
function App() {

  return (

    <Router>
      <div className="App">
  <div className="router"></div>
        <main>
          <Switch>

            <Route exact path='/'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <Route path="/shoppingcart"><Shoppingcart /></Route>
            <Route path='/product'><ProductList /></Route>
            <Route path='/note'><Note/></Route>
            <Route path="/signup"><Signup/></Route>
            <Route path='/Contact'><Contact/></Route>
            <Route path='/category'><Categorylist/></Route>
            <Route path='/NewProduct'><NewProduct/></Route>
            
            <Route path='*'> <NotFound /> </Route>
          </Switch>
        </main>
      
      </div>
    </Router>
  
  );
}

export default App;

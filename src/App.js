import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Login from "./Pages/Login"
import ProductList from "./Pages/ProductList"
import NotFound from "./Pages/NotFound"
function App() {

  return (
   
    <Router>
      <div className="App">

        <main>
          <Switch>
            <Route exact path='/'>< ProductList/></Route>
            <Route  path='/login'><Login /></Route>
        
            <Route path='*'> <NotFound /> </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

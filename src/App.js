import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect


} from "react-router-dom";
import { Suspense } from 'react'
import React from "react"
import Language from "./Pages/Language"

import ProductDetails from './Pages/ProductDetails'
import LayoutNew from "./Pages/LayoutNew"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Shoppingcart from "./Pages/Shoppingcart"
import Note from "./Pages/Note"
import Contact from "./Pages/Contact"
import Categorylist from "./Pages/category"
import ProductList from "./Pages/ProductList"
import NewProduct from "./Pages/NewProduct"
import ChangeProfile from "./Pages/ChangeProfile"
import Signupgoogle from "./Pages/Signupgoogle"
  import  Google from "./Pages/Google"
  import ProductListCategory from "./Pages/ProductListCategory"

 import Pay from "./Pages/Pay"
function App() {

  return (
    <Suspense fallback={null}>
    <Router>
      <div className="App">
  <div className="router"></div>
 

<LayoutNew/>


        <main>
          <Switch>

            <Route exact path='/'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <PrivateRoute path="/shoppingcart" Component={Shoppingcart}/>
            <Route path='/product'><ProductList /></Route>
            <Route path='/note'><Note/></Route>
            <Route path='/pay'><Pay/></Route>
            <Route path='/Contact'><Contact/></Route>
            <Route path='/category'><Categorylist/></Route>
            <Route path='/NewProduct'><NewProduct/></Route>
            <Route path='/google'><Google/></Route>
            <Route path='/signup'><Signupgoogle/></Route>
            
            <Route path='/language'><Language/></Route>
            <PrivateRoute path='/changeProfile' Component={ChangeProfile}></PrivateRoute>
            <Route path='/ProductListCategory/:cat'><ProductListCategory/></Route>
            <Route path='/productdetails/:id'><ProductDetails/></Route>
            <Route path='*'><NotFound /> </Route>
          </Switch>
        </main>
       
      </div>
      
    </Router>
    </Suspense>
 
  );
}

export default App;

const isAuth = () => !!localStorage.getItem("token");
const PrivateRoute = ({Component,...props}) => {
    return <Route {...props} render={() => {
      // if token ist da  bestimmte component rendern
        if (isAuth())
            return React.createElement(Component)
        else return <Redirect to={"/login"}/>
    }}/>
}
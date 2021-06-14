import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './food.css';
import FoodList from './FoodList';
import FoodDetails from './FoodDetails';
import Loading from './Loading';

/* let App=()=>(
    <div>
        <Loading/>
       <FoodList/>
    </div>
  ); */
class App extends Component{
 render(){
        return(
            <BrowserRouter>
           <nav className="navbar navbar-inverse">
                    <div className="container">
                            <ul className="nav navbar-nav">
                            <Link to='/' className="navbar-brand">Food List</Link>
                            </ul>
                    </div>
                </nav>
                <div>
                    <Route exact path="/" component={FoodList}></Route>
                    <Route exact path="/food/:foodId" component={FoodDetails}/>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;
import React,{Component} from 'react';
import Enquiries from '../containers/Enquiries';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './form';
import Home from'../containers/Home'


class App extends Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}></Route>
                <Route path='/form' component={Form}></Route>
                <Route path='/enquiries' component={Enquiries}></Route>
            </Router>
        )
    }
}

export default App;
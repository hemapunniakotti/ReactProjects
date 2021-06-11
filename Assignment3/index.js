import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './components/courseList';
import EnquiryList from './components/enquiryList';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './components/form';


ReactDOM.render(
<Router>
    <Route exact path='/' component={CourseList}></Route>
    <Route path='/form' component={Form}></Route>
    <Route path='/enquiries' component={EnquiryList}></Route>
</Router>,
document.getElementById('root'));
import React,{Component} from 'react'
import {connect} from 'react-redux';
import {courseList} from '../actions';
import {bindActionCreators} from 'redux';

import CourseList from '../components/courseList';

class Home extends Component{
    componentDidMount(){
        this.props.courseList()
    }
    render(){
        return(
            <div>
                <CourseList courseData={this.props.courses}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        courses:state.courses
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({courseList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
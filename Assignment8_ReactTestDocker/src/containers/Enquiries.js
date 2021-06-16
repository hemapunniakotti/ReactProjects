import React,{Component} from 'react'
import {connect} from 'react-redux';
import {enquiryList} from '../actions';
import {bindActionCreators} from 'redux';

import EnquiryList from '../components/enquiryList';

class Enquiries extends Component{
    componentDidMount(){
        this.props.enquiryList()
    }
    render(){
        console.log(this.props.outputenq)
        return(
            <div>
                <EnquiryList enquiryData={this.props.enquiries.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        enquiries:state.enquiries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({enquiryList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Enquiries);
import React from 'react'
import {connect} from 'react-redux'

class Loading extends React.Component{
    render(){
        console.log('loading');
        return(
            <div>
                {
                    this.props.loading && <h1>Loading...</h1>
                }
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return({
        loading:state.loading
    })
}

export default connect(mapStateToProps,null)(Loading)
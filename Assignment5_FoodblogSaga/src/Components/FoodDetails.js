import React, {Component} from 'react';


import {connect} from 'react-redux'
import{bindActionCreators} from 'redux'
import {fetchFoodBegin} from '../Actions'
import './food.css';
import {Link} from 'react-router-dom';
const url= 'http://localhost:5000/food';

class FoodDetail extends Component{

    componentDidMount(){
        this.props.fetchFoodBegin()
    }
    render(){
        const food=this.props.food
        if(this.props.food[this.props.match.params.foodId-1]){
            console.log(food)
            console.log(food[this.props.match.params.foodId-1])
            
            const item=food[this.props.match.params.foodId-1]
            return(
                <div> <center>
                <h2>Food Details</h2>
                </center>
                <h3>{item.name}</h3>
                <center>
                <img src={item.image_url} alt={item.name}/>
            </center>
            <div>
                <h4>Description</h4> {item.details.description}
            </div>
            <div>
                <h4>Recipie</h4> {item.details.recipe}
            </div>
            </div>
            )
        }
    else{
    return(
        <div></div>
    )}
    }

    
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state.food_reducer.food)
    return{
        food:state.food_reducer.food
    }
        

}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({fetchFoodBegin},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)( FoodDetail);
import React,{Component} from 'react'
import {connect} from 'react-redux'
import{bindActionCreators} from 'redux'
import {fetchFoodBegin} from '../Actions'
import './food.css';
import {Link} from 'react-router-dom';
class FoodList extends Component{

    componentDidMount(){
        this.props.fetchFoodBegin()
    }
    render(){
        const food=this.props.food
        if(this.props.food){
            const renderList = (foodlist) =>{
                return foodlist.map((item) => {
                    return( 
                <div class="second">
            <Link key={item.id } to={`/food/${item.id}`}>
                <div className="card col-md-3">
            <div class="row">
                <div className="card-img">
                <img class="card-img-top" src={item.image_url} alt={item.name}/>
                </div>
                <div class="foodTitle">{item.name}</div>
                </div>
        </div>
       </Link>
       
       </div>
        )})}
        return(
            <div className="container">
            <div  className="row">
                {renderList(food)}
                
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


export default connect(mapStateToProps,mapDispatchToProps)(FoodList);
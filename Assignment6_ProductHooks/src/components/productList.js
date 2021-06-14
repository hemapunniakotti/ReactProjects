import React, {useState,useEffect} from 'react';
import axios from "axios";
import './product.css';


function ProductList(){
    const [title] = useState('Product List')
    const [products, setProducts] = useState([])


    useEffect(() => {
        const data=axios.get("http://localhost:5000/products")
        .then(response=>{
        const data=response.data
        setProducts({data})})
                
    }, [products]);
    var renderThis
    if(products.data){
    const renderList = (products) =>{
        return products.map((item) => {
        return( 
            <div className="layoutbg col-md-3">
                        <div class="row">
                            <div className="card-img">
                            <img className="card-img-top" src={item.img} alt={item.name}/>
                            </div>
                            <span class="topTemp">{item.name}</span>
                            </div>
                            <div class="card-body">
                                <div class="card-title">{item.type}</div>
                                <div class="card-text">
                                    <p className="prices">Rs. {item.price}</p>
                                </div>
                        </div>
                    </div>
    )})}
    renderThis=renderList(products.data)}
    return(
        <div>
            <h1 class="projTitle">{title}</h1>
            <div className="container">
            <div  className="row">
                {renderThis}
            </div>
        </div>
        </div>
    )
}

export default ProductList;
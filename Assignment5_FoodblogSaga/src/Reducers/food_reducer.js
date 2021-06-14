import {
    FETCH_FOOD_BEGIN,
    FETCH_FOOD_FAILURE,
    FETCH_FOOD_SUCCESS
} from '../Actions'

const initialState={
    food:[],
    loading:false,
    error:null
}


export default function food_reducer(state=initialState,action){
    switch(action.type){
        case FETCH_FOOD_BEGIN:
            console.log(action)
            console.log("Loading")
            return{
                ...state,
                loading:true,
                error:null
            }
        case FETCH_FOOD_SUCCESS:
            console.log("Loaded")
            return{
                ...state,
                loading:false,
                food:action.payload
            }
        case FETCH_FOOD_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload.error,
                food:[]
            }
        default:
            return state;
    }
}
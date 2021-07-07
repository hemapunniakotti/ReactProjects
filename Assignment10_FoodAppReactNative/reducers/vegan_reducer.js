export default function(state={},action){
    switch(action.type){
        case 'GET_VEGAN':
            return{...state,latest:action.payload}
        default:
            return state;
    }
}

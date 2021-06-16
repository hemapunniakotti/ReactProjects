    export default function(state={},action){
    switch(action.type){
        case 'GET_COURSES':
            return{...state,latest:action.payload}
        default:
            return state;
    }
}

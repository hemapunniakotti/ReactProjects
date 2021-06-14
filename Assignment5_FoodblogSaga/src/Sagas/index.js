import axios from "axios";
import{takeLatest,all,put} from 'redux-saga/effects'

function* fetchFood(){
    const data= yield axios.get('http://localhost:5000/feed')
    .then(response=>response.data)

    yield put({type:'FETCH_FOOD_SUCCESS',payload:data})

}



function* foodWatcher(){
    yield takeLatest('FETCH_FOOD_BEGIN',fetchFood)
}

export default function* rootSaga(){
    yield all([
        foodWatcher()
    ])
}
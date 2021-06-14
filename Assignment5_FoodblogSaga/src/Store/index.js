import {createStore,applyMiddleware} from 'redux'
import reducers from '../Reducers'
import rootSaga from '../Sagas'
import { logger } from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware()


//let store=createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware,logger)))
let store=createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default store
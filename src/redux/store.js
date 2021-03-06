// 4. import createstorenya dari redux
// 88 tambahkan applyMiddleware
import {createStore, applyMiddleware} from 'redux';

//87. import redux thunknya
import thunk from 'redux-thunk';

//24. import Counternya daro reducer yg telah dibuat
// import counter from './reducers/counter.reducers';

//83. import root reducer
import rootReducers from './reducers/combinereducers'

//5. export createstorenya, kasih function kosong
//25. isi createStorenya dgn COunter yg telahdi import
//84. ganti create store dgn rootReducers
//89. tmbh param applyMiddlewarenya dgn (thunk)
export default createStore(rootReducers, applyMiddleware(thunk));


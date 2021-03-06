//77. krn sudah punya 2 reducer, harus memakai combine reducer, buat file cimbinereducers.js di folder reducers
//78. import combine reducers
import {combineReducers} from 'redux';

//79. import semua reducersnya, import counter di reducers
import Counter from './counter.reducers';
//80. import jg user.reducers  getData yg di import dari user.reducers
import getData from './user.reducers';

//81. tmbhkan var sbg root dari semua reducers2
const rootReducers = combineReducers({Counter, getData});

//82. export rootReducers
export default rootReducers;
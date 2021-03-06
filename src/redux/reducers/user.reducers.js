//60. buat file user.reducers.js di folder reducers
//61. import type2nya get data success dll dari action
import {
  GET_DATA_REQUEST, 
  GET_DATA_SUCCESS, 
  GET_DATA_FAILED} from '../actions/user.actions';

//62. buat variable initial state, krn butuh bnyk, state tdk bisa hanya 1. but properti data valuenya array kosong. & buat properti error jg isi dgn value null
const initialState = {
  data: [],
  error: null,
}

//63. buat function get data
//64. isi dgn param state & isi dgn valuenya yaitu const initialState
//65. idsi param 2 dgn action
const getData = (state= initialState, action)=>{
  //66. buat swich casenya
  switch(action.type){
    //67. mskkn case requestnya
    case GET_DATA_REQUEST:
      //68. consolelog 'sedang ambil data'
      //69. return state sebelumnya
      return{
        ...state
      }
    //70. mskkn case success
    case GET_DATA_SUCCESS:  
    //71. return & ubah datanya
    return{
      //72. ambil state sblmnya
      ...state,
      //73. ubah properti data di const initialState 
      data: action.result 
    }
    //74. mskkn case data failed
    case GET_DATA_FAILED:
      //75. consolelog errornya
      console.log(action.error);
      //76. return & simpan error di dlm state
      return{
        error: action.error
      }
      //77. buat default casenya
      default:
        return state;
  }
}

//64.export functionnya
export default getData;

//12. buat file reducer, utk data di olah
//13. import var increment & decrementnya
import {INCREMENT, DECREMENT} from '../actions/counter.actions';

//14. buat initialstate 
const initialState = {
  counter : 0,
  //42. tambahkan properti nama jika ingin menambah properti, cth: nama
  nama: "",
}

//15. buat function
//17. buat statenya sbg param, mskkn initialstate sbg valuenya. sm acionnya 
const counter = (state= initialState, action) => {
  //18. buat kondisi menggunakan switchcase, if else/ ternary, di switch mskkn acton.typenya
  switch (action.type){
    //19. buat sesuai casenya
    case INCREMENT:
      return{
        //20. setelah return ambil state sblmnya
        ...state,
        //21. lakukan perubahan value yg diinginkan. tulis properti counter di value const initialstate : state(properti param function const counter)
        counter: state.counter + 1,
        //43. panggil properti nama & mskkn valuenya
        nama:"ke klik increment",
      }
       
    case DECREMENT:
      //44. mskkn if state.counter utk mencegah minus ketika di decrement, pindahkan return ke dlm if.
      if(state.counter > 0){
        return{
          ...state,
          counter: state.counter - 1,
        }
        //45. tmbhkan else utk mengembalikan state tsb
      }else{
        return state;
      }

    default:
    return state
  }
}
//16. export functionnya
export default counter;
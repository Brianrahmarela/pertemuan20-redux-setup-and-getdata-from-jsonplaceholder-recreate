//44.import axios utk mengambil data
import axios from "axios";

//59. buat file user.actions.js di folder actions
//45. buat variable get datanya dgn value yg sama dgn nama variablenya & export
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
//46. buat jg var succes & failed & export
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

//47. buat fungsi get data request & export
export const getDataRequest = () => {
  //48. return & tmbh props type dgn value variable GET_DATA_REQUEST
  return {
    type: GET_DATA_REQUEST,
  }
}

//49. buat jg function success
export const getDataSuccess = (result) => {
  //50. return & tmbh props type dgn value variable GET_DATA_SUCCESS
  return {
    type: GET_DATA_SUCCESS,
    //50.1. jika sukses tampilkan/ return result
    result,
  }
}

//51. buat jg function failed
export const getDataFailed = (error) => {
  //52. return & tmbh props type dgn value variable GET_DATA_FAILED
  return {
    type: GET_DATA_FAILED,
    //52.1. jika failed tampilkan/ return error
    error,
  }
}

//42. di actions, krn tdk menerima inputan, cth state increment isinya brp, tp utk mengambil data bisa, buat fungsi ambil data
export const getData = () => {
  //43. return function dgn param dispatch
  return function (dispatch) {
    //53. kirim dgn dispatch
    dispatch(getDataRequest);
    
    //54. gunakan axios utk ambil data
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    //55. tmbhkan .then ketika berhasil ambil data, krn jika ingin melakukan perubahan state, maka kirimdulu ke reducer
    //56. kirim dgn dispatch(variable get data sukses)
    //57. kirimkan beserta result.data, (result.data))
    .then((result) => dispatch(getDataSuccess(result.data)))
    //58. buat catch jg utk ketika error
    .catch((error) => dispatch(getDataFailed(error)))
  };
};

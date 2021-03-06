//8. buat file action yg diinginkan di folder actions. cth counter.actions.js


//10. dari action utk berkomunikasi ke reducer 
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//9. buat function actionnya utk menjalankan
export const increaseCounter = () => {
  return{
    //11. mskkan properti type dgn value yg berisi 'INCREMENT' dari var const INCREMENT. kemudian export  ini mengirim increment, 
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return{
    type: DECREMENT,
  };
};
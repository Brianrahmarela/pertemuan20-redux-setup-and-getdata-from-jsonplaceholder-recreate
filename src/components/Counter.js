//22. buat komponennya. buat file counter.js 

import React from 'react';

//36. import function increase & decrease dari action
import {increaseCounter, decreaseCounter} from '../redux/actions/counter.actions' 

//26. Import connect dari react redux
import {connect} from 'react-redux';
// import { increaseCounter, decreaseCounter } from '../redux/actions/counter.actions';
//23. buat functionnya
//32. ambil propsnya
function Counter(props) {
  return (
    <div>
      <h1>Counter: </h1>
      {/* 34.buat button + utk increase dgn onclick */}
      <button onClick={() => props.increaseCounter()}>+</button>
      {/* 33. tampilkan props counternya */}
      <h1>{props.counter}</h1>
      {/* 35.buat button - utk decrease dgn onclick */}
      <button onClick={() => props.decreaseCounter()}>-</button>
    </div>
  )
}

//29. buat function mapStatetoProps, yaitu utk memapping state di store & menerima state dari store. menjadi props di export default connect(mapStatetoProps,;
const mapStateToProps = (props) => {
  console.log(props);
  return{
    //jadi props
    //31. return counternya dgn value props
    //83. panggil dgn nested object. tmbhkan Counter setelah props.
    counter: props.Counter.counter,
  };
};

//30. buat function mapDispatchToProps,
//mengirim state dari cstore, jika mengirim, tdk punya nilai secara lgsg, krn sbg props, ketika mentrigger increment di counter actions. artinya kit aakan mengirim fungsinya
//39. kasih param dispatch di function const mapDispatchToProps = (dispatc)
const mapDispatchToProps = (dispatch) => {
  return{
    //37. Tambahkan increase & decrease utk dikirim
    //38. panggil function setelah increaseCounter: 
    increaseCounter: () => {
      //40. panggil param dispatch disini. buat callback increase counter
      dispatch(increaseCounter());
    },
    //41. panggil jg decreaseCounter, panggil dgn dipatch
    decreaseCounter: () => {
      dispatch(decreaseCounter());
    }
  };
};

//dispatch mengirim
//mapStatetoProps engambil props
//27. di export tambahkan connect & bungkus dgn () nama function yg diexportnya. cth: export default connect(Counter);
//28. buat 2 parameter (mapStatetoProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

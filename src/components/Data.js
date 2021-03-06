// 85. buat file component baru  Data.js
//99. import use effect utk memanggil data
import React,{useEffect} from 'react'
//90. utk menampilkan data import connect dari react-redux 
import {connect} from 'react-redux'
//91. import get data di user actions
import {getData} from '../redux/actions/user.actions'

//96. utk menampilkan data, mapping propsnya ambil props di function Data, 
function Data(props) {
  console.log(props);
  //102. buat variable utk props
  const getData = props.getData;

  //100. panggil datadgn useeffect
  useEffect(() => {
    //101. panggil propsnya
    getData();
     //103. panggil variablenya agar hanya dipanggl 1x
  }, [getData]);

  return (
    <div>
      <h1>Data dari Redux</h1>
      {/* 97.mapping datanya */}
      {props.data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
        </div>
      ))}

    </div>
  );
}

//93. buat fungsi mapStateToProps, mapDispatchToProps, buat return kosong
//94. ambil propsnya di paramnya
const mapStateToProps = (props) => {
  console.log('mstp data', props);
  return{
    //95. ambil propsnya aitu data, tmbhkan value getData.data
    data: props.getData.data,
  }
}

//98. berikan param dispatch
const mapDispatchToProps = (dispatch) => {
  return{
    //97. panggil datanya
    getData: () => dispatch(getData()),
  }
}

//92. tambahkan connect, tambahkan param mapState & mapdispatch
export default connect(mapStateToProps, mapDispatchToProps)(Data);

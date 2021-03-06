import './App.css';
// import Header from './components/Header'
// import DetailProfile from './components/DetailProfile'

//23. import komponent counternya
import Counter from './components/Counter'

//86. import komponen data
import Data from './components/Data'

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      {/* 24. panggil komponen counternya */}
      <Counter/>
      {/* 84. buat component baru yaitu Data*/}
      <Data />
    </div>
  ); 
}

export default App;

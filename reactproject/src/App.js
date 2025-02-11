import HelloWorld from './HelloWorld';
import Hello from './Hello';
import Test from './Test';
import './App.css';

function App() {
  let person1={pid:100,age:20,name:"siri",image:"https://c.pxhere.com/images/66/b8/fb80e3fc401511ff8d9c38eb0bdb-1573331.jpg!d"};
  let person2={pid:500,age:21,name:"saru",image:"https://c.pxhere.com/images/66/b8/fb80e3fc401511ff8d9c38eb0bdb-1573331.jpg!d"};
  
  return (
    <div className="App">
      <HelloWorld />
      <Hello />
      <Test person={person1}/>
      <Test person={person2}/>
    </div>
  );
}

export default App;

import Student from "./components/Student"
import PersonIterator from "./components/PersonIterator"
import StudentClass from "./components/StudentClass"





const name = "Mia Koluci"
const age = 34
const toShow = true
const fruits = ['apple', 'android', 'bananna']

const student = {
  name,
  age,
  fruits,
}

const App = () => {
  return (<>
    <div>Hello World</div>
    <Student fruits={fruits} name={name} age={age} shouldTheComponentShow={toShow} />

    <hr/><hr/><hr/>

    <PersonIterator/>

    <hr/><hr/><hr/>

    <StudentClass
    fruits = {fruits}
    name = {name}
    age = {age}
    shouldTheComponentShow={toShow}
    />


  </>);
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;

import AddToDo from "./components/AddToDo";
import AppName from "./components/appName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './App.css';

function App(){
  return(
    <center class='todo-container'>
      <AppName />
      <AddToDo/>
      <TodoItem1/>
      <TodoItem2/>
      
        

        
      

      
    </center>
  )
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  // let healthyFoods = [];
  let healthyFoods = ['Lentils', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];
  return <>
    <h1>Healthy Foods</h1>
    <ErrorMessage />
    <FoodItems />
  </>
}

export default App

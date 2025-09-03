import Food from "./Food";

const FoodItems = () => {
    let healthyFoods = ['Lentils', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];
  return (
    <ul className="list-group">
      {healthyFoods.map((food) => (
        <Food healthyFoods = {food}/>
      ))}
    </ul>
  );
};

export default FoodItems;

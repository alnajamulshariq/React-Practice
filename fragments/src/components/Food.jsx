const Food = (props) => {
  return (
    <li key={props.healthyFoods} class="list-group-item">
      {props.healthyFoods}
    </li>
  );
};

export default Food;

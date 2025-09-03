const User = (props) => {
  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default User;
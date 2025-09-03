import Random from "./Random";
function App(){
  let name = "Shariq";
  let fullName = "Shariq Najam";
  let favNumber = 7;
  return(
    <div>
      <h1>Hello this is {name}</h1>
      <h3>And my full name is {fullName} and my favorite number is {favNumber}</h3>
      <Random />
    </div>
  );
}



export default App;
function Random(){
    let randNum = Math.random()*10;
    return(
        <h1 style={{'background-color':'#77e07b'}}>Random Number Is {randNum}</h1>
    )
}

export default Random;
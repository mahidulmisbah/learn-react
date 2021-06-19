import { useState } from "react";
var val = 0;

const Home = () => {
    const [preValue, updateValue] = useState(0);
    
    function handleClick(e){
        console.log('This is handleClick' , e.target);
    }

    const handleParameter = (name,e) => {
        console.log('handle click with parameter ' , name , e.detail);
    }

function changeState()
{
    val= val+1;
    console.log(val);
    updateValue(val);
}

    return ( 
        <div className="home">
            <h2>This is home</h2>
            <button onClick = {handleClick}>Click me</button>
            <button onClick = { (e) => handleParameter('misbah',e)}>Click me again</button>

            <p>{preValue}</p>
            <button onClick = {changeState}>count your click</button>
        </div>

        
     );
}
export default Home;
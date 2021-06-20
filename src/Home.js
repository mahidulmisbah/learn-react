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
            <h2 style ={{textEmphasisColor: "green"}}>Welcome to my palace</h2><br />
            <label htmlFor="username" style ={{width: "200px",height: "15px", margin:"0px 5px 5px 0px"}}>User Name: </label>
            <input type="text" /><br /><br />
            
            <label htmlFor="password" style ={{width: "200px",height: "15px"}}>Password : </label>
            <input type="password" style={{marginLeft: "10px"}}/><br />
            <button onClick = {handleClick}>Sign in</button><br /><b></b>
             <label htmlFor="msg">Please Sign up here  </label>
            <button onClick = { (e) => handleParameter('misbah',e)}>Sign up</button>

            <p>{preValue}</p>
            <button onClick = {changeState}>Click here show book list:</button>
        </div>

        
     );
}
export default Home;
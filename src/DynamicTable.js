// Template for using any where in the project 
// Learn how to use props

import { useState, useEffect } from "react"; 
import BookList from "./bookList";  

const DynamicTable = () => {
    const [blogs] = useState([
        {title: 'Mara khao', author: 'Misbah',publishYear: 2019, id : '1'},
        {title: 'khaite khaite shes', author: 'Kundu',publishYear: 2020, id : '2'},
        {title: 'ami ar partesina', author: 'Pijush',publishYear: 2021, id : '3'}
    ]);

    const [name,setName] = useState("mario"); // setName by useState -  

    useEffect( ()=> {
        console.log("Learn Use effect- A auto call fucntion in every rendering");
        console.log(name);
    },[name]);

    return (
        <div className="tableDiv">
            <BookList blogs = {blogs} message  = "See the book list" />
            <button onClick ={()=> setName("hei")}>Change name</button>
        </div>
     );
}
 
export default DynamicTable;
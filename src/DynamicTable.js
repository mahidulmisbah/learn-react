// Template for using any where in the project 
// Learn how to use props

import { useState } from "react"; 
import BookList from "./bookList";  

const DynamicTable = () => {
    const [blogs] = useState([
        {title: 'Mara khao', author: 'Misbah',publishYear: 2019, id : '1'},
        {title: 'khaite khaite shes', author: 'Kundu',publishYear: 2020, id : '2'},
        {title: 'ami ar partesina', author: 'Pijush',publishYear: 2021, id : '3'}
    ]);



    return (
        <div className="tableDiv">
            <div className="blog-preview" >
                <BookList blogs = {blogs} message  = "See the book list" />
            </div>
        </div>
     );
}
 
export default DynamicTable;
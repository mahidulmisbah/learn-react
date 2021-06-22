// Template for using any where in the project 
// Learn how to use props

import { useState } from "react"; 
import BookListTemplate from "./bookListTemplate";  

const DynamicTable = () => {
    const [blogs,newList] = useState([
        {title: 'Mara khao', author: 'Misbah',publishYear: 2019, id : '1'},
        {title: 'khaite khaite shes', author: 'Kundu',publishYear: 2020, id : '2'},
        {title: 'ami ar partesina', author: 'Pijush',publishYear: 2021, id : '3'}
    ]);
    const DeleteRow = (id) => {
        const setNewList = blogs.filter(blog => blog.id !==id);
        newList(setNewList);
    }
    return (
  
        <div className="tableDiv">
             <BookListTemplate blogs = {blogs} message  = "See the book list" handleDelete={DeleteRow} />
        </div>
     );
}
 
export default DynamicTable;
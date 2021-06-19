import { useState } from "react";

const DynamicTable = () => {
    const [blogs, value] = useState([
        {title: 'English', author: 'Misbah', id : '1'},
        {title: 'Math', author: 'Mahidul', id : '2'},
        {title: 'Science', author: 'Hridy', id : '3'}
    ]);
    function ChangeTableValue()
    {
        value([{title: 'social science', author: 'Toha', id : '4'}]);
    }



    return (
        <div className="tableDiv">
            <div className="blog-preview" >
                <table className="table" >
                    <tr className = "table-row">
                            <th className = "table-td">Title</th>
                            <th className = "table-td">Author</th>
                    </tr>

                    {blogs.map((blog) =>(
                    
                        <tr className = "table-row" key ={blog.id}>
                            <td className = "table-td">{blog.title}</td>
                            <td className = "table-td">{blog.author}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="btn">
                <button onClick = {ChangeTableValue}>Click to change</button>
            </div>
        </div>
     );
}
 
export default DynamicTable;
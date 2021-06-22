const BookListTemplate = ({blogs,message,handleDelete}) => {

    return ( 
        <div className="bookList">
            <p>{message}</p>
            <table className="table" >
                    <thead className = "table-row">
                            <th className = "table-td">Title</th>
                            <th className = "table-td">Author</th>
                            <th className = "table-td">Publishing Year</th>
                            <th className = "table-td">Delete Option</th>
                            
                    </thead>

                    {blogs.map((blog) =>(
                    
                        <tr className = "table-row" key ={blog.id}>
                            <td className = "table-td">{blog.title}</td>
                            <td className = "table-td">{blog.author}</td>
                            <td className = "table-td">{blog.publishYear}</td>
                            <td className = "table-td">
                                <button className = "table-td-btn" onClick ={()=>handleDelete(blog.id)}>Delete This Row</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
     );
}
 
export default BookListTemplate;
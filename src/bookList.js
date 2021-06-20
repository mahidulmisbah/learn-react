const BookList = (props) => {
    const blogs = props.blogs;
    const message = props.message;

    return ( 
        <div className="bookList">
            <p>{message}</p>
            <table className="table" >
                    <tr className = "table-row">
                            <th className = "table-td">Title</th>
                            <th className = "table-td">Author</th>
                            <th className = "table-td">Publishing Year</th>
                            
                    </tr>

                    {blogs.map((blog) =>(
                    
                        <tr className = "table-row" key ={blog.id}>
                            <td className = "table-td">{blog.title}</td>
                            <td className = "table-td">{blog.author}</td>
                            <td className = "table-td">{blog.publishYear}</td>
                        </tr>
                    ))}
                </table>
            </div>
     );
}
 
export default BookList;
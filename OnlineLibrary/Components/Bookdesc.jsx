import { useParams } from "react-router-dom"
import { mockBooks } from "../utils/books-details"
export default function Bookdesc(){
     const { id } = useParams(); // Get book ID from URL
    const book = mockBooks.find(b => b.id === parseInt(id)); // Find book by ID

    if (!book) return <h1>Book not found</h1>; // Handle invalid book ID

return(
     <div className="Book-container">
        <div className="Book-detail">
        <h1 className="Book-title">{book.title}</h1>
        <img src={`${book.cover_img}`} alt={`${book.id} book`} className="Book-img" />
        
        <h2 className="Book-author"> <span className="span-text">By:</span> {book.author}</h2>
        <p className="Book-description"><span className="span-text">Description: </span>{book.description}</p>
        <div className="mini-desc">
            <p className="rating"><span className="span-text">Rating: </span>{book.rating}</p>
             <p className="genre"><span className="span-text">Genre: </span>{book.genre}</p>
        </div>
        
        </div>
        </div>
)
}
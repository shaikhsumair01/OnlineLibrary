import BookDisplay from "./BookDisplay"
import { mockBooks } from "../utils/books-details"

// Displaying a welcome message and looping through mockBooks array and creating a book container for each book
export default function Home(){
    return(
        <>
        <h1 className="Welcome-Header">Welcome to Online Library Management System</h1>
        <div className="Section-Book">
             {
            mockBooks.map(book=> <BookDisplay book={book}/>)
        }
      
        </div>
        </>
       
    )
}
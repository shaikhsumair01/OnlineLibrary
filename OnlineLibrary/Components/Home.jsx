import BookDisplay from "./BookDisplay"
import { mockBooks } from "../utils/books-details"
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
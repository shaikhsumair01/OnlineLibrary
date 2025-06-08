import Bookdesc from "./Bookdesc"
import { Link } from "react-router-dom"
export default function BookDisplay({book}){
    return(
        <Link to={`/book/${book.id}`}>
        <div className="Book-container">
        <div className="Book-detail">
        <h1 className="Book-title">{book.title}</h1>
        <img src={`${book.cover_img}`} alt={`${book.id} book`} className="Book-img" />
        </div>
        </div>
        </Link>
        
    )
}
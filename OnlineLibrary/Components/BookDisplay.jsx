import { Link } from "react-router-dom"
export default function BookDisplay({book}){
    return(
        <Link to={`/book/${book.id}`}>
        <div className="display-container">
        <div className="display-detail">
        <h1 className="display-title">{book.title}</h1>
        <img src={`${book.cover_img}`} alt={`${book.id} book`} className="display-img" />
        </div>
        </div>
        </Link>
        
    )
}
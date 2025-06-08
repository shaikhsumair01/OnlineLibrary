import BookDisplay from "./BookDisplay"
import { mockBooks } from "../utils/books-details"
export default function Search(){
    return(
        <>
        <div className="Searchdiv">
        <input type="text" name="textbox" className="Searchbar"/>
        <button className="Search-btn">Submit</button>
        </div>
        <BookDisplay/>
        </>
        
    )
}
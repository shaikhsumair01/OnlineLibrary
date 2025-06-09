import BookDisplay from "./BookDisplay"
import { mockBooks } from "../utils/books-details"
import { Link } from "react-router-dom"
import { useState } from "react"

/*Creating a search bar and a dropdown. 
The searchbar uses useState in which when the value changes, 
Based on user input it displays the books (filters books) 
provided that the user enters the author name or the book title. 
The dropdown is a list of categories on which when the user clicks on the category, 
it reroutes the user to Category page. */
export default function Search(){
const [searchText, setSearchText] = useState("")
const [category, setCategory] = useState("")

// Storing categories in an array
const categories =["History", "Fiction", "Science", "Science Fiction", "Philosophy", "Psychology", "Anthropology", "Fantasy", "Self-help"];

// Filtering book based on user input
const filterBooks = ()=>{
    const filteredBooks = mockBooks.filter((book)=>
        book.title.toLowerCase().includes(searchText.toLowerCase())|| book.author.toLowerCase().includes(searchText.toLowerCase()))
    return filteredBooks;
}
const filteredBooks = filterBooks();

// Styling the page
    return(
        <>
        <div className = "Filternav">
        <h1 className="FilterHeading">Browse books based on category or author/title </h1>
        <div className="Searchdiv">
        <input type="text" name="textbox" className="Searchbar" placeholder="Search the books based on Author name or title" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        {(searchText=="")? "" :<i className="fa-solid fa-xmark icon-cancel" onClick={()=>setSearchText("")}></i>}
        </div>
        {/* Dropdown, sets the category based on useState */}
        <div className="Dropdown">
         <select className="DropdownList" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {/* When the option is submitted we are rerouted to category page */}
          <Link to={`/Search/${category}`}><button className="Filter-btn">Filter</button></Link>

        </div>
        </div>
        {/* Displaying books */}
       <div className={`Section-Book ${filteredBooks.length === 0 ? "h-screen overflow-hidden" : ""}`}>
        {/* If search is empty display all the books and if the user types something then filter them based on it */}
        {searchText ? (
          filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookDisplay key={book.id} book={book} />)
          ) : (
            <p className="NoResults">Cannot find the book. Please try again with a different search term.</p>
          )
        ) : (
          mockBooks.map((book) => <BookDisplay key={book.id} book={book} />)
        )}
      </div>
    </>
  );
}
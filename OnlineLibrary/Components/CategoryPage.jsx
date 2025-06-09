import { useParams } from "react-router-dom";
import BookDisplay from "./BookDisplay";
import { mockBooks } from "../utils/books-details";
// UseParams to store the category. Filters the books based on category
export default function CategoryPage() {
  const { category } = useParams();
  const filteredBooks = mockBooks.filter((book) => book.genre === category);

//   Maps the books based on the category selected and sends the data to BookDisplay in order to render it
  return (
    <div className="Category">
      <h1 className="Category-title">Books in {category}</h1>
      <div className="Section-Book">
        {filteredBooks.map((book) => (
          <BookDisplay key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
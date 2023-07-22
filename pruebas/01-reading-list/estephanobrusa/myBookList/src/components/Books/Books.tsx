import { useContext } from "react";
import ListBook from "../ListBooks/ListBooks";
import { BooksContainer } from "./Books.style";
import { BooksContext, BooksList } from "../../Context/Books.context";
import { typeList } from "../ListBooks/ListBooks.model";

const Dashboard = () => {
  const { books, toggleBooks, storedBook } = useContext(BooksContext);
 
  const handleToggleBooks = (id: string, type: typeList) => {
    let newList: BooksList = {
      availableBooks: [],
      toReadBooks: [],
    };
    switch (type) {
      case "availableBooks":
        const bookToRead = books.availableBooks.find(
          (book) => book.book.ISBN === id
        );
        newList = {
          availableBooks: books.availableBooks.filter(
            (book) => book.book.ISBN !== id
          ),
          toReadBooks: bookToRead ? books.toReadBooks.concat(bookToRead) : [],
        };
        toggleBooks(newList);
        storedBook(newList);
        break;

      case "toReadBooks":
        const availableBooks = books.toReadBooks.find(
          (book) => book.book.ISBN === id
        );

        newList = {
          toReadBooks: books.toReadBooks.filter(
            (book) => book.book.ISBN !== id
          ),
          availableBooks: availableBooks
            ? books.availableBooks.concat(availableBooks)
            : [],
        };
        toggleBooks(newList);
        storedBook(newList);
        break;

      default:
        break;
    }
  };
  return (
    <BooksContainer>
      <ListBook
        type="availableBooks"
        books={books.availableBooks}
        handleToggleBook={handleToggleBooks}
      />
      <ListBook
        type="toReadBooks"
        books={books.toReadBooks}
        handleToggleBook={handleToggleBooks}
      />
    </BooksContainer>
  );
};

export default Dashboard;

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { Library } from "../Db/Books.model";
import BooksDB from "../Db/booksDB.json";

interface BooksContext {
  books: BooksList;
  toggleBooks: React.Dispatch<React.SetStateAction<any>>;
  storedBook: (books: BooksList) => void;
}
export interface BooksList {
  availableBooks: Library[];
  toReadBooks: Library[];
}
const booksFromLocalStorage = localStorage.getItem("books");
const booksStored =
  booksFromLocalStorage !== null
    ? (JSON.parse(booksFromLocalStorage) as BooksList)
    : null;

const initialState: BooksContext = {
  books: {
    availableBooks: booksStored
      ? booksStored.availableBooks
      : (BooksDB.library as Library[]),
    toReadBooks: booksStored ? booksStored.toReadBooks : [],
  },
  toggleBooks: () => {},
  storedBook: () => {},
};

export const BooksContext = createContext(initialState);

export const BooksContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [books, toggleBooks] = useState(initialState.books);

  const storedBook = (books: BooksList) => {
    localStorage.setItem("books", JSON.stringify(books));
  };
  const onFocus = () => {
    const booksFromLocalStorage = localStorage.getItem("books");
    const booksStored =
      booksFromLocalStorage !== null
        ? (JSON.parse(booksFromLocalStorage) as BooksList)
        : null;
    if (booksStored) {
      toggleBooks(booksStored);
    }
  };
  
  const WindowFocusHandler = () => {
    useEffect(() => {
      window.addEventListener("focus", onFocus);
      return () => {
        window.removeEventListener("focus", onFocus);
      };
    }, []);
  };
  WindowFocusHandler();

  const value = {
    books,
    toggleBooks,
    storedBook,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

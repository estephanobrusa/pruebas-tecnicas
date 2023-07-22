import React, { PropsWithChildren, createContext, useState } from "react";
import { Library } from "../Db/Books.model";

interface BooksContext {
  books: Books;
  toggleBooks: React.Dispatch<React.SetStateAction<any>>;
}
interface Books {
  availableBooks: Library[];
  toReadBooks: Library[];
}

const booksStored =
  typeof localStorage.getItem("books") !== undefined &&
  (JSON.parse(localStorage.getItem("books") || "{}") as Books);
  
const initialState: BooksContext = {
  books: {
    availableBooks: booksStored ? booksStored.availableBooks : [],
    toReadBooks: booksStored ? booksStored.toReadBooks : [],
  },
  toggleBooks: () => {},
};

export const BooksContext = createContext(initialState);

export const BooksContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [books, toggleBooks] = useState({
    availableBooks: booksStored ? booksStored.availableBooks : [],
    toReadBooks: booksStored ? booksStored.toReadBooks : [],
  });
  const value = {
    books,
    toggleBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

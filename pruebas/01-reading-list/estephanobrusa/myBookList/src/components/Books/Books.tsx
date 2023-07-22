import { useState } from "react";
import ListBook from "../ListBooks/ListBooks";
import books from "./../../Db/books.json";
import { BooksProps } from "./Books.model";
import { BooksContainer } from "./Books.style";

const Dashboard = () => {
  const [library, setLibrary] = useState<BooksProps>({
    availableBooks: books.library,
    toReadBooks: [],
  });


  return (
    <BooksContainer>
      <ListBook books={library.availableBooks} />
      <ListBook books={library.toReadBooks} />
    </BooksContainer>
  );
};

export default Dashboard;

import { ListBookProps, genreEnum } from "./ListBooks.model";
import {
  BookAvailable,
  BookBox,
  CardBook,
  Container,
  ContainerFilter,
} from "./ListBook.style";
import { useEffect, useState } from "react";

const initStateFilter = {
  genre: genreEnum.Default,
  pages: 1000,
}
const ListBook = ({books = [], handleToggleBook, type }: ListBookProps) => {
  const [filter, setFilter] = useState(initStateFilter);
  const [bookList, setBookList] = useState(books)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
   (isFiltered) ? handleFilter() : setBookList(books) 
  }, [books]);


  const handleReset =() => {
    setFilter(initStateFilter);
    setBookList(books);
    setIsFiltered(false);
  }

  const handleFilter = () => {
    setIsFiltered(true);    
    const booksFiltered = books.filter((book) => {
      if (filter.genre === genreEnum.Default){
        return book.book.pages <= filter.pages;
      }else {
        return book.book.genre === filter.genre && book.book.pages <= filter.pages
      }
    });
    setBookList(booksFiltered);
  };
  

  const title = type === "availableBooks" ? "libros disponibles" : "lista de lectura";
  return (
    <Container>
      <BookAvailable>{`${bookList.length} ${title}`}</BookAvailable>
      <ContainerFilter>
        <select value={filter.genre} onChange={(e) => setFilter({...filter, genre: e.target.value as genreEnum})}>
          {Object.values(genreEnum).map((genre,index) => {
            return <option key={genre} disabled={index === 0 ? true : false} value={genre}>{genre}</option>;
          })}
        </select>
        <div>
        <span >{filter.pages}</span>
        <input type="range" max={1000} value={filter.pages} onChange={(e) => setFilter({...filter, pages: Number(e.target.value)})}  />
        </div>
        <button onClick={() => handleReset()} >clear</button>
        <button onClick={() => handleFilter()} >filter</button>
      </ContainerFilter>
      <BookBox>
        {bookList?.map((book) => (
          <CardBook
            key={book.book.ISBN}
            onClick={() => handleToggleBook(book.book.ISBN, type)}
          >
            <img src={book.book.cover} alt={book.book.title} />
          </CardBook>
        ))}
      </BookBox>
    </Container>
  );
};

export default ListBook;

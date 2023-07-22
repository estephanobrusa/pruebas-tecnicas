import { ListBookProps } from "./ListBooks.model";
import { BookAvailable, BookBox, CardBook, Container } from "./ListBook.style";

const ListBook = ({ books = [] }: ListBookProps) => {
  console.log("🚀 ~ file: ListBook.tsx:6 ~ ListBook ~ books:", books);
  return (
    <Container>
      <BookAvailable>{`${books?.length} libros disponibles`}</BookAvailable>
      <BookBox>
        {books?.map((book) => (
          <CardBook>
            <img src={book.book.cover} alt={book.book.title} />
          </CardBook>
        ))}
      </BookBox>
    </Container>
  );
};

export default ListBook;

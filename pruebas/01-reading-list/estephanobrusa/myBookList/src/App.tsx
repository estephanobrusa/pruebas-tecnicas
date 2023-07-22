import { BooksContextProvider } from "./Context/Books.context";
import Books from "./components/Books/Books";

function App() {
  return (
    <BooksContextProvider>
      <Books />
    </BooksContextProvider>
  );
}

export default App;

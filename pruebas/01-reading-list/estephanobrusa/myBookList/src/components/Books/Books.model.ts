import { Library } from "../../Db/Books.model";

export interface BooksProps {
    availableBooks: Library[];
    toReadBooks: Library[];
}
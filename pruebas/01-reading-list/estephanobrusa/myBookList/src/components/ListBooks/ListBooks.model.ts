import { Library } from "../../Db/Books.model";

export interface ListBookProps {
    type:  typeList;
    books?: Library[];
    handleToggleBook: (id : string, type: typeList) => void;
}

export type typeList = 'availableBooks' | 'toReadBooks';

export enum genreEnum {
    Default = '-',
    Terror = 'Terror',
    Fantasía = 'Fantasía',
    Ciencia_ficción = 'Ciencia ficción',
    Zombies = 'Zombies'
}
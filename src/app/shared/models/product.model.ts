import { Color } from './color.model';
import { BookDetails } from './book-details.model';
import { Size } from './size.model';

export interface Options{
    colors:Color[],
    sizes:Size[],
    details:BookDetails
}
export interface Product{
    id:string,
    title:string,
    description:string[],
    options: Options,
}


import { Size } from '../shared/models/size.model';

export interface Protector{
    id:string,
    title:string,
    description:string[],
    sizes: Size[]
}

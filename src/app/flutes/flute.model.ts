import { Color } from '../shared/models/color.model';

export interface Flute{
    id:string,
    title:string,
    description:string[],
    colors: Color[]
}

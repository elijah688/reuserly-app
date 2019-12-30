import { Color } from '../shared/models/color.model';

export interface Straw{
    id:string,
    title:string,
    description:string[],
    colors: Color[]
}

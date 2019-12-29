interface Color{
    value: string,
    image: string
    price: number
    buy_link: string
}

export interface Straw{
    id:string,
    title:string,
    description:string,
    colors: Color[]
}

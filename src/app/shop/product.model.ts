interface Color{
    value: string,
    image: string
    price: number
    buy_link: string
}

export interface Product{
    id:string,
    title:string,
    description:string,
    colors: Color[]
}


// title:  {type: String, required: true},
//   description: {type: [String], required: true},
//   colors: {type: [{
//     value:  {type: String, required: true},
//     image: {type: String, required: true},
//     price: {type: Number, required: true},
//     buy_link: {type: String, required: true},
//   }], required: true} 
// });
import { ProductProps } from "../interfaces/interface"

export type RootNavigator = {
    Home: undefined
    Map: undefined
    Favorite: undefined
    Details: {
       product: ProductProps
    } 
  }
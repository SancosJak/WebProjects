export default  interface Dish {
        id: string;
        title: string;
        category: string;
        price: number;
        image: string;
}
export type DishID = Dish['id'];
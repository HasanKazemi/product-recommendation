import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
const API_URL = "https://fakestoreapi.com/products";


const FetchProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const newProducts = await response.json();
            setProducts(newProducts)
        }
        fetchData()
    }, [])


    return (
        <>
        {products.map(product => {
            return <DisplayProducts key={product.id} productTitle={product.title} productImage={product.image} productPrice={product.price} />
        })}
        </>
    )
}
export default FetchProducts;
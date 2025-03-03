import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
const API_URL = "https://fakestoreapi.com/products";

const FetchProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (localStorage.getItem("products")) {
            setProducts(JSON.parse(localStorage.getItem("products")))
            return
        }
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const newProducts = await response.json();
            setProducts(newProducts)
            localStorage.setItem("products", JSON.stringify(newProducts))
        }
        fetchData()
    }, [])

    return (
        <DisplayProducts products={products} />    
    )
}
export default FetchProducts;
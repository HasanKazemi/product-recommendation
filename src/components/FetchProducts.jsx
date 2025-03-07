import { useEffect } from "react";
const API_URL = "https://fakestoreapi.com/products";

const FetchProducts = ({setProducts,productsRef}) => {
    useEffect(() => {
        if (localStorage.getItem("products")) {
            setProducts(JSON.parse(localStorage.getItem("products")))
            productsRef.current = JSON.parse(localStorage.getItem("products"))
            return
        }
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const newProducts = await response.json();
            setProducts(newProducts)
            localStorage.setItem("products", JSON.stringify(newProducts))
            productsRef.current = newProducts
        }
        fetchData()
    }, [])
}
export default FetchProducts
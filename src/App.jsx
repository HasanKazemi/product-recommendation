import { useState , useRef } from 'react'
import './App.css'
import FetchProducts from './components/FetchProducts'
import DisplayProducts from './components/DisplayProducts'
import SelectCategory from './components/SelectCategory'

function App() {
  const [products, setProducts] = useState([])
  const [option, setOption] = useState("")
  const productsRef = useRef([])
  const options = [
    {value: "", label: "All"},
    {value: "men's clothing", label: "Men's clothing"},
    {value: "jewelery", label: "Jewelery"},
    {value: "electronics", label: "Electronics"},
    {value: "women's clothing", label: "Women's clothing"},
  ]
  const filterByCategory = (category)=>{
    const filteredProcuts = productsRef.current?.filter(product => product.category === category)
    setProducts(filteredProcuts)
  }

  return (
    <>
      <FetchProducts setProducts={setProducts} productsRef={productsRef} />
      <SelectCategory options={options} value={option} onchange={(e)=>{
        setOption(e.target.value)
        filterByCategory(e.target.value)
        }} />
      <DisplayProducts products={products} setProducts={setProducts} />
    </>
  )
}

export default App

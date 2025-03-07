import { useState , useRef } from 'react'
import './App.css'
import FetchProducts from './components/FetchProducts'
import DisplayProducts from './components/DisplayProducts'
import SelectCategory from './components/SelectCategory'
import PriceInput from './components/PriceInput'

function App() {
  const [products, setProducts] = useState([])
  const [option, setOption] = useState("")
  const [minNumber, setMinNumber] = useState(0)
  const [maxNumber, setMaxNumber] = useState(Infinity)
  const productsRef = useRef([])
  const options = [
    {value: "", label: "All"},
    {value: "men's clothing", label: "Men's clothing"},
    {value: "jewelery", label: "Jewelery"},
    {value: "electronics", label: "Electronics"},
    {value: "women's clothing", label: "Women's clothing"},
  ]

  const filterByCategory = (category)=>{
    if (!category) return setProducts(productsRef.current);
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
      <PriceInput setMinNumber={setMinNumber} setMaxNumber={setMaxNumber} />
      <DisplayProducts products={products} setProducts={setProducts} />
    </>
  )
}

export default App

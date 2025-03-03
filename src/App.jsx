import { useState } from 'react'
import './App.css'
import FetchProducts from './components/FetchProducts'
import DisplayProducts from './components/DisplayProducts'
import SelectCategory from './components/SelectCategory'


function App() {
  const [products, setProducts] = useState([])
  const options = [
    {value: "", label: "All"},
    {value: "men's clothing", label: "Men's clothing"},
    {value: "jewelery", label: "Jewelery"},
    {value: "electronics", label: "Electronics"},
    {value: "women's clothing", label: "Women's clothing"},
  ]
  return (
    <>
      <SelectCategory options={options} />
      <FetchProducts products={products} setProducts={setProducts} />
      <DisplayProducts products={products} setProducts={setProducts} />
    </>
  )
}

export default App

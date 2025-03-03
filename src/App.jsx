import { useState } from 'react'
import './App.css'
import FetchProducts from './components/FetchProducts'
import DisplayProducts from './components/DisplayProducts'


function App() {
  const [products, setProducts] = useState([])
  return (
    <>
      <FetchProducts products={products} setProducts={setProducts} />
      <DisplayProducts products={products} setProducts={setProducts} />
    </>
  )
}

export default App

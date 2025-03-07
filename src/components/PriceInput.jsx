const PriceInput = ({setMinNumber,setMaxNumber}) => {
  return (
    <div>
        <input type="number" onChange={(e)=>setMinNumber(e.target.value)} placeholder="Minimum Price..." />
        <input type="number" onChange={(e)=>setMaxNumber(e.target.value)} placeholder="Maximum Price..." />
    </div>
  )
}

export default PriceInput
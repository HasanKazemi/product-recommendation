import style from "./price.module.css";

const PriceInput = ({setMinNumber,setMaxNumber}) => {
  return (
    <div className={style.priceContainer}>
        <input type="number" onInput={(e)=>{
            setMinNumber(e.target.value)
            }} className={style.inputPrice} placeholder="Minimum Price..." min={0} />
        <input type="number" onInput={(e)=>{
            setMaxNumber(e.target.value)
            }} className={style.inputPrice} placeholder="Maximum Price..." />
    </div>
  )
}

export default PriceInput
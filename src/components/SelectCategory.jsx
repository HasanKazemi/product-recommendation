import style from "./select.module.css"

const SelectCategory = ({options, onchange}) => {
  return (
    <div className={style.selectContainer}>
        <select onChange={onchange} className={style.selectTag}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectCategory
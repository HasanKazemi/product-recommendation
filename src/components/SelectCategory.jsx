import style from "./select.module.css"

const SelectCategory = ({options}) => {
  return (
    <div className={style.selectContainer}>
        <select className={style.selectTag}>
            {options.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectCategory
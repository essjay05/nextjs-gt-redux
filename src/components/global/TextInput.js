import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./TextInput.module.scss"

export default function TextInput ({ 
  inputId, 
  inputName, 
  inputPlaceholder,
  onChange, 
  inputRequired = false,
  hiddenLabel = false,
  disabled = false,
  ...props }) {

  const [inputValue, setInputValue] = useState("")

  // WIP: Trying to convert to using global TextInput that was created. 
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value)
  // }
    
  return (
    <div className={styles.textInputWrapper}>
      <label
        htmlFor={inputId}
        className={`${styles.label} ${hiddenLabel ? "hidden" : ""}`}>
        {inputName}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className={`${styles.textInput} ${disabled ? "disabled" : ""}`}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder ? inputPlaceholder : inputName}
        disabled={disabled}
        required={inputRequired}/>
    </div>
  )

}

TextInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  onChange: PropTypes.func,
  inputRequired: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  disabled: PropTypes.bool
}
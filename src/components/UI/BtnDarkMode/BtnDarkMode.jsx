import {useEffect, useRef} from "react";
import {useLocalStorage} from "../../../utils/UseLocalStorage.js";
import './style.css'
export const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode','dark')

  const btnRef = useRef(null)

  useEffect(() => {
      if (darkMode === 'dark'){
        document.body.classList.add('dark')
        btnRef.current.classList.add('dark-mode-btn--active')
      } else{
        document.body.classList.remove('dark')
        btnRef.current.classList.remove('dark-mode-btn--active')
      }
  }, [darkMode]);
  
  
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }
  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src="/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
        <img src="/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
      </button>
    </>
  )
}
import React, { useState } from 'react'
import styles from "./Home.module.css"
const Home = () => {
  const [count, setCount] = useState(1)
  const changeCount = () => {
    setCount(count * 2)
  }
  const [valid, setValid] = useState(true)
  const ChangeCount = () => {
    setValid((!valid))
  }
  return (
    <div>Home
      <div className={valid ? styles.active : ''} style={{ color: valid ? "blue" : "green" }}>*HOME<br />*ABOUT
      <br />*PORTFOLIO</div>
      <button onClick={ChangeCount}>click {count}</button></div>
  )
  
}


export default Home
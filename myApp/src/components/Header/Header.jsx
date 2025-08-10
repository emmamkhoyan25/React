import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <h3>Infinity Hub</h3>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Portfolio</a>
      <a href="">Sing in</a>
      <button className={`${styles.btn}`}>Sing up</button>
      </nav>
    </header>
  )
}

export default Header
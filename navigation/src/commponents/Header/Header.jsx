import { useState } from "react"
import { classes } from "../../utist"
import styles from "./Header.module.scss"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const [form, setForm] = useState(false)
    return (
        <header className={classes(styles.header, "container")}>
            <Link to="/"><h1>Logo</h1></Link>
            <nav>

                <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/contact">Contact</NavLink>

            </nav>
            <div className={styles.header_login}>
                <button onClick={() => setForm((value)=>!value)}>Login</button>
                <form className={form ? styles.active : " "}>
                    <input type="text" />
                    <input type="text" />
                    <button>Sing in</button>
                </form>
            </div>
        </header >
    )
}

export default Header
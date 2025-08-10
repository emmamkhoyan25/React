import { classes } from "../../utist"
import style from "./Home.module.scss"
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import { prods } from "../../../public/data/product"
import ProductCard from "../../commponents/ProductCard/ProductCard"
const Home = () => {
    const navigate = useNavigate()
    const [products, useProducts] = useState(prods)
    return (
        <div className={style.prod_grid}>
            {
                products.map((product,i) => <ProductCard key={i} product={product}/> )
            }
        </div>
    )
}

export default Home
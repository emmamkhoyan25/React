import React from 'react'
import styles from "./ProductCard.module.scss"
import { classes } from '../../utist'

const ProductCard = ({ product }) => {
    return (
        <div className={styles.crad}>
            <h2>{product.name}</h2>
            <img  src={product.image}  width={"200px"}  alt="" />
            <h1>{product.discount}</h1>
            <p>{product.description}</p>
            <h3>{product.category}</h3>
            <button >Learn more</button>
        </div>

    )
}

export default ProductCard
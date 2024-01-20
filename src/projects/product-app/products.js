import React from "react"

import * as productStyles from "./products.module.scss"

function Products(props) {
    return (
        <div className={productStyles.item}>
            <h3 className={productStyles.name}>{props.product.name}</h3>
            <p className={productStyles.price}>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p className={productStyles.des}>{props.product.description}</p>
        </div>
    )
}

export default Products
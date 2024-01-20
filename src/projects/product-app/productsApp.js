import React from "react"
import Product from "./products"
import productsData from "./schoolProducts"

import * as productStyles from "./products.module.scss"

function ProductsApp() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div className={productStyles.app}>
            <h1>School Supplies</h1>
            <div className={productStyles.titles}>
                <h2 className={productStyles.name}>Name</h2>
                <h2 className={productStyles.price}>Price</h2>
                <h2 className={productStyles.des}>Description</h2>
            </div>
            <div className={productStyles.itemList}>
                {productComponents}
                <hr/>
            </div>
        </div>
    )
}

export default ProductsApp
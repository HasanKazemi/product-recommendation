import style from "./products.module.css";

const DisplayProducts = ({productTitle, productImage, productPrice}) => {
    return (
    <div className={style.productCard}>
        <img src={productImage} alt={productTitle} className={style.productImage} />
        <h4 className={style.productTitle} title={productTitle} >
            { productTitle.length > 30 ? productTitle.substring(0,30)+"..." : productTitle}
        </h4>
        <p className={style.productPrice} >{productPrice}$</p>
        <button className={style.similarBtn} >similar products</button>
    </div>
    )
}

export default DisplayProducts
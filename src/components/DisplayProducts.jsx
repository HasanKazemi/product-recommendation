import style from "./products.module.css";

const DisplayProducts = ({products}) => {
    return (
    <div className={style.productContainer}>
        {products.map(product => (
        <div className={style.productCard}>
            <img src={product.image} alt={product.title} className={style.productImage} />
            <h4 className={style.productTitle} title={product.title} >
                { product.title.length > 30 ? product.title.substring(0,30)+"..." : product.title}
            </h4>
            <p className={style.productPrice} >{product.price}$</p>
            <button className={style.similarBtn} >similar products</button>
        </div>
        ))}
    </div>
    )
}

export default DisplayProducts
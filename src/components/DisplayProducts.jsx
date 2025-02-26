const DisplayProducts = ({productTitle, productImage, productPrice}) => {
    return (
    <div>
        <img src={productImage} alt={productTitle} />
        <p>{productPrice}</p>
    </div>
    )
}

export default DisplayProducts
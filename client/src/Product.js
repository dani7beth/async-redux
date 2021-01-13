const Product = ({product}) =>{
  return (
    <span>
      <h2>{product.name}</h2>
      <h6>{product.department}</h6>
      <h4>{product.description}xs</h4>
      <p>${product.price}</p>
    </span>
  )
}
export default Product;
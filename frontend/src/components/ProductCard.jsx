function ProductCard({image, name, price=0,onBuy}) {
  return (
    <div className="product-card">
        <img src={image} alt={name}  />
        <h3>{name}</h3>
        <p>{price.toLocaleString()} VNĐ</p>
        <button onClick={onBuy}>Mua ngay</button>
    </div>
  );
}
export default ProductCard;


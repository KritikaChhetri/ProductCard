function ProductCard({ image, name, category, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h2>{name}</h2>

      <p><strong>Category:</strong> {category}</p>

      <h3>₹{price}</h3>

      <p>{description}</p>

      <button>View Product</button>
    </div>
  );
}

export default ProductCard;
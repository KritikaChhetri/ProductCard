import ProductCard from "./components/ProductCard";
import speaker from "./assets/speaker.jpg";
import headphones from "./assets/headphones.jpg";
import watch from "./assets/watch.jpg";
import bag from "./assets/bag.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Our Products</h1>

      <div className="product-container">

        <ProductCard
          image={speaker}
          name="Bluetooth Speaker"
          category="Electronics"
          price="1,999"
          description="Portable wireless speaker"
        />

        <ProductCard
          image={headphones}
          name="Wireless Headphones"
          category="Electronics"
          price="2,499"
          description="Comfortable wireless headphones"
        />

        <ProductCard
          image={watch}
          name="Smart Watch"
          category="Wearables"
          price="3,999"
          description="Smart watch with fitness tracking"
        />

        <ProductCard
          image={bag}
          name="Laptop Bag"
          category="Accessories"
          price="1,299"
          description="Stylish and durable laptop bag"
        />

      </div>
    </div>
  );
}

export default App;
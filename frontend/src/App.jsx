import Header from "./components/header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
function App(){
    const products = [
    {
      id: 1,
      name: "Gundam RX-78-2",
      price: 1200000,
      image: "https://bizweb.dktcdn.net/thumb/large/100/479/026/products/09a85275-adde-446e-87d6-8c396b0f3bfc.jpg?v=1679033639423",
    },
    {
      id: 2,
      name: "Gundam Barbatos",
      price: 1500000,
      image: "https://www.usagundamstore.com/cdn/shop/files/ZnclMZfgWJyMn2Pg_f6331e6e-c64f-4b0b-a8ba-8fbee8699f47.jpg?v=1763476582",
    },
    {
      id: 3,
      name: "Gundam Unicorn",
      price: 1800000,
      image: "https://weeboo.vn/wp-content/uploads/2025/06/hinh-anh_2025-06-06_173343901.jpg",
    },
    {
      id: 4,
      name: "Gundam Immortal Justice",
      price: 1800000,
      image: "https://bizweb.dktcdn.net/thumb/large/100/479/026/products/vn-11134207-7r98o-lpvv7v39c9n6da-1703915799427.jpg?v=1703915808623",
    },
  ];
  return (
    <div className="app">
      <Header cartcount={0} />

      <Hero
        heading="Website bán Gundam chính hãng"
        description="Chuyên mô hình Gundam, Figure, phụ kiện – giá tốt – giao hàng nhanh"
        buttonText="Mua hàng ngay"
      >
        <ProductList products={products} />
      </Hero>

      <Footer />
    </div>
  );
}
export default App;


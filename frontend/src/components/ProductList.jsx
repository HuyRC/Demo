import ProductCard from "./ProductCard";
function ProductList({products}) {
    const handleBuy=(product)=>{
        alert(`Bạn đã mua sản phẩm: ${product.name}`);
    };
     return ( 
        <section className="product-list">
        <h2>Danh sách sản phẩm</h2>
        <div className="product-grid">
        {
            products.map((product)=>(
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        onBuy={()=>handleBuy(product)}
                    />
                )
            )
        }
        </div>
        </section>
     );
}
export default ProductList;

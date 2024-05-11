import { useEffect, useState } from "react";

const SmartPhone = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data = await response.json();
        console.log("data", data);
        console.log("Fetched products:", data);
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        {products.map((product: any) => (
          <div>
            {" "}
            <img src={product.images[0]} alt="" />
            <p key={product.id}></p>
            <p>{product.title}</p>
            <p>{product.brand}</p>
            <p>{product.price}.00$</p>
            <p>wash{product.discountPercentage}%</p>
            {/* <p>{product.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartPhone;

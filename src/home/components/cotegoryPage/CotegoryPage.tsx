import { useEffect, useState } from "react";
import "./CotegoryPage.scss";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//
const CotegoryPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`);

      const res = await response.json();
      // **********||

      // res.filter((product: any) => product.category.name === "Shoes");
      setData(res);
      // setData(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleLikeProduct = (product: any) => {
    dispatch({ type: "like_product", product });
  };

  return (
    <div>
      <div className="cotegory_mobile">
        <div className="cotegory_mobile_head">
          <h1>Featured Event</h1>
          <div>
            <img src="images/CotegoryMobile.png" alt="" />
            <h3>Up to 60% off Apple tech</h3>
            <p>Save on AirPods, iPhones, and more.</p>
          </div>
        </div>
      </div>
      <div className="cotegory">
        <div className="cotegory_mobile_item">
          {data &&
            data.map((product) => (
              <div key={product.id} className="cotegory_api">
                <div className="cotegory_img_box">
                  <Link to={`/cotegory/${product.id}`}>
                    <img
                      className="cotegory_img"
                      src={product.images[1]}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <p className="cotegory_title">{product.title}</p>
                <p className="cotegory_price"> Price: {product.price} $</p>
                <p>Was: {product.category.id} %</p>
                <div className="cotegory_heart">
                  <p className="cotegory_heart_text">
                    SPONSORED{" "}
                    <CiHeart
                      onClick={() => handleLikeProduct(product)}
                      className="cotegory_heart_icon"
                    />
                  </p>
                  <p className="cotegory_heart_icon_box"></p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CotegoryPage;

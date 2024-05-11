import "./Like.scss";
import { useSelector } from "react-redux";

const Like = () => {
  const likes = useSelector((state: any) => state.likesFeature.likes);

  return (
    <div className="like-container">
      <h1>Liked Products</h1>
      <div className="cotegory_mobile_item like_cotegory">
        {likes.map((product: any) => (
          <div key={product.id} className="cotegory_api">
            <div className="cotegory_img_box">
              <img
                className="cotegory_img"
                src={product.images}
                alt={product.title}
              />
            </div>
            <p className="cotegory_title">{product.title}</p>
            <p className="cotegory_price"> Price: {product.price} $</p>
            <p>Was: {product.category.id} %</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;

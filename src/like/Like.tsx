// Like.tsx
// import React from "react";
// import "./Like.scss";
// import { useSelector } from "react-redux";
// import { CiHeart } from "react-icons/ci";

// const Like = () => {
//   const likes = useSelector((state) => state.likesFeature.likes);

//   return (
//     <div className="like-container">
//       <h2>Liked Products</h2>
//       <div>
//         {likes.map((product) => (
//           <p key={product.id}>{product.title}</p>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Like;
import React from "react";
import "./Like.scss";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";

const Like = () => {
  const likes = useSelector((state) => state.likesFeature.likes);

  return (
    <div className="like-container">
      <h1>Liked Products</h1>
      <div className="cotegory_mobile_item like_cotegory">
        {likes.map((product) => (
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

// <div className="cotegory_mobile_item">
//   {likes.map((product) => (
//     <div key={product.id} className="cotegory_api">
//       <div className="cotegory_img_box"></div>
//       <p className="cotegory_title">{product.title}</p>
//       <p className="cotegory_price"> Price: {product.price} $</p>
//       <p>Was: {product.category.id} %</p>
//       <div className="cotegory_heart">
//         <p className="cotegory_heart_text">
//           SPONSORED <CiHeart className="cotegory_heart_icon" />
//         </p>
//         <p className="cotegory_heart_icon_box"></p>
//       </div>
//     </div>

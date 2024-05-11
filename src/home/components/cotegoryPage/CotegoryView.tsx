import { useState, useEffect } from "react";
import "./CotegoryPage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
export const CotegoryView = () => {
  const [data, setData] = useState<any>({ image: "" });

  const { id } = useParams();

  useEffect(() => {
    // console.log("param",id);
    axios(`https://api.escuelajs.co/api/v1/products/${id}`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>SINGLE Page </h1>
      {data ? (
        <div className="cotegory_img_about_box">
          <img className="cotegory_img_id" src={data.images} alt=" aef" />
          <div className="cotegory_img_about">
            <p>
              {" "}
              <span>Price:</span> {data.price}.00$
            </p>
            <p>
              <span>Name:</span> {data.title}{" "}
            </p>
            <p>
              <span>Description:</span> {data.description}
            </p>
            <CiHeart />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

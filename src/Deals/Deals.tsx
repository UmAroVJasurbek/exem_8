import React from "react";
import "./Deals.scss";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Deals = () => {
  return (
    <div className="deals">
      <div className="deals_container">
        <div className="deals_img_container">
          {" "}
          <img className="deals_img_1" src="images/blue_ebay.jpg" alt="" />
          <h3 className="deals_text_h3">Deals made easy all year long.</h3>
          <h4 className="deals_text_h4">Free shipping. Best prices.</h4>
          <Link className="deals_link" to="/cotegory">
            <button className="deals_button">
              Get your thing <FaArrowRight />
            </button>
          </Link>
        </div>
        <img className="deals_img" src="images/deals.jpg" alt="" />
        <div className="deals_img_box">
          <img className="deals_img_2" src="images/BestCare.png" alt="" />
        </div>
      </div>
    </div>
  );
};

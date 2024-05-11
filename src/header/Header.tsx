import { useState } from "react";
import "./Header.scss";
import { MdNotificationsNone } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Navigate to the corresponding route based on selected value
    navigate(`/cotegory`);
  };
  return (
    <>
      <header>
        <div className="header_container">
          <ul className="header_ul">
            <div className="header_ul_box">
              {" "}
              <span>He</span>{" "}
              <li>
                <Link className="link_page" to="/login">
                  Sign Up
                </Link>
              </li>
              <span>or</span>{" "}
              <li>
                <Link className="link_page" to="/register">
                  Register
                </Link>
              </li>
            </div>
            <li>Daily Deals</li>
            <li>Help & Contact</li>
          </ul>
          <div className="header_container">
            <ul className="header_ul">
              <li>Ship to</li>
              <li>Sell</li>
              <li>
                <Link className="link_page" to="/like">
                  Like
                </Link>
              </li>
            </ul>

            {/* <select
              className="header_select"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Select an option</option>
              <option value="like1">your likes product</option>
            </select> */}
            <select className="header_select" name="" id="">
              <option value="">Hi Laylo</option>
              <option value="">Hi Laylo2</option>
            </select>
            <button className="header_button">
              <MdNotificationsNone className="header_icon" />
            </button>
            <button className="header_button">
              <CgShoppingCart className="header_icon" />
            </button>
          </div>
        </div>
        <div className="header_hero">
          <img className="header_logo_img" src="images/EBay_logo.png" alt="#" />
          {/* <select name="shop buy category" id="">
            <option value="">Category shoes</option>
            <option value="">Category clothes</option>
            <option value="">Category Eletronics</option>
            <option value=""> Category Smart Phone</option>
          </select>
           */}

          <select
            className="header_select_all_cotegoires"
            name="shop buy category"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="">Select an option</option>
            <option value="Shoes">Category Shoes</option>
            <option value="Clothes">Category Clothes</option>
            <option value="Eletronics">Category Eletronics</option>
            <option value="SmartPhone"> Categry Smart Phone</option>
          </select>

          <div className="header_search">
            <IoIosSearch className="header_search_icon" />
            <input
              className="header_input"
              type="search"
              placeholder="Search for anything"
            />
            <select
              className="header_select_cotegoires"
              name="All cotegoires name  "
              id=""
            >
              <option value="">All Cotegoires</option>
              <option value="">Baby</option>
              <option value="">Girl</option>
            </select>
          </div>
          <button className="header_btn_search">Search</button>
          <button className="header_btn_adv">Advenced</button>
        </div>
      </header>
    </>
  );
};

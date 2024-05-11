import "./Nav.scss";
import { FaHeart } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div className="nav_line"></div>
      <div className="nav_container">
        <ul className="nav_ul">
          <li>
            <Link className="link_page" to="/">
              Home
            </Link>
          </li>
          <li className="link_page">
            <Link className="link_page" to="/save">
              <FaHeart className="nav_ul_icon" />
              saved
            </Link>
          </li>
          <li>
            <NavLink className="link_page" to="/cotegory">
              Motors
            </NavLink>
          </li>

          {/* <li>Electronics</li> */}
          <li className="link_page">
            <Link className="link_page" to="/cotegory">
              Electronics
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Collestibles
            </Link>{" "}
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Home & Garden
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link_page" to="/cotegory">
              Fashion
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Toys
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Sporting Goods
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Business & Industrail
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Jewelry & Watches
            </Link>{" "}
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              eBay Live
            </Link>
          </li>
          <li>
            <Link className="link_page" to="/cotegory">
              Refurbished
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

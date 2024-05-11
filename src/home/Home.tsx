import "./Home.scss";
import { useEffect, useState } from "react";
import CarouselShoesItem from "./components/CarouselShoesItem";
import CarouselClothesItem from "./components/CarouselClothesItem";
import CarouselElectronicsItem from "./components/CarouselElectronicsItem";
import { FaArrowRight } from "react-icons/fa6";
import Carousel from "./components/Carousel";
import { Deals } from "../Deals/Deals";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  const [clothes, setClothes] = useState<any[]>([]);
  const [electronics, setElectronics] = useState<any[]>([]);
  const [shoes, setShoes] = useState<any[]>([]);
  // const [cotegoryMobile, setcotegoryMobile] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");

      const data = await response.json();
      // **********||
      const filteredClothes = data.filter(
        (product: any) => product.category.name === "Clothes"
      );
      setClothes(filteredClothes);
      // **********||

      // **********||
      const filteredElectronics = data.filter(
        (product: any) => product.category.name === "Electronics"
      );

      setElectronics(filteredElectronics);
      console.log("filteredElectronic", filteredElectronics);

      // setElectronics(filteredElectronics);
      // **********||

      // **********||
      const filteredCotegoryMobile = data.filter(
        (product: any) => product.category.name === "Electronics"
      );

      setElectronics(filteredCotegoryMobile);
      console.log("filteredCotegoryMobile", filteredCotegoryMobile);

      // setElectronics(filteredElectronics);
      // **********||

      // **********||
      const filteredShoes = data.filter(
        (product: any) => product.category.name === "Shoes"
      );
      setShoes(filteredShoes);
      // **********||
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const clothesItems =
    Array.isArray(clothes) && clothes.length ? (
      clothes.map((item) => (
        <CarouselClothesItem
          className="embla__slide"
          key={item.id}
          item={item}
        />
      ))
    ) : (
      <h1>No records...</h1>
    );
  const electronicsItems =
    Array.isArray(electronics) && electronics.length ? (
      electronics.map((item) => (
        <CarouselElectronicsItem
          className="embla__slide"
          key={item.id}
          item={item}
        />
      ))
    ) : (
      <h1>No records...</h1>
    );

  const shoesItem =
    Array.isArray(shoes) && shoes.length ? (
      shoes.map((item) => (
        <CarouselShoesItem className="embla__slide" key={item.id} item={item} />
      ))
    ) : (
      <h1>No records...</h1>
    );

  return (
    // <div>
    //   <CotegoryPage />
    // </div>
    <div>
      {" "}
      <Carousel items={clothesItems} />
      <div className="shoes_box">
        <Carousel items={shoesItem} />
        <div className="shoes_box_title">
          {" "}
          <h2>Score these trending kicks</h2>
          <Link className="deals_link" to="/cotegory">
            <a href="" className="shoes_link">
              See all <FaArrowRight />
            </a>
          </Link>
        </div>
      </div>
      <Deals />
      <div>
        <div className="Electronics_box">
          <h2 className="Electronics_title">
            Today's Deals – All With Free Shipping{" "}
          </h2>
          <Link className="deals_link" to="/cotegory">
            <a href="" className="Electronics_link">
              See all <FaArrowRight />
            </a>
          </Link>
        </div>
        <Carousel items={electronicsItems} />
      </div>{" "}
      <Footer />
    </div>
  );
};
export default Home;

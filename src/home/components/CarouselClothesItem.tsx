import { FaArrowRight } from "react-icons/fa6";
import "./Carousel.scss";
export default function CarouselClothesItem({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  console.log("item", item);
  // console.log("className", className);

  return (
    <div className={`home_container ${className}`}>
      <div className="home_box">
        <h2 className="home_title">{item.title}</h2>
        <h3 className="home_text">Up to 60% off the brands you love.</h3>

        <button className="home_button">
          SHop Now
          <FaArrowRight className="home_button_icon" />
        </button>
      </div>
      <div>
        <div>
          <div style={{ marginBottom: "5px" }}>
            {Array.isArray(item.images) && item.images.length
              ? item.images.map((img: string) => (
                  <img
                    className="img_api"
                    key={img}
                    src={img}
                    alt={item.title}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

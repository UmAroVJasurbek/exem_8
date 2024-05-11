import { FaArrowRight } from "react-icons/fa6";
import "./CarouselElectronicsItem.scss";
export default function CarouselElectronicsItem({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  console.log("item", item);
  console.log("className", className);

  return (
    <div className={`electronic_container ${className}`}>
      <div style={{ marginBottom: "20px" }}>
        {Array.isArray(item.images) && item.images.length ? (
          <div className="shoes_img">
            {" "}
            <img
              className="electronic_img_api"
              src={item.images[0]}
              alt="no img"
            />
          </div>
        ) : null}
        <h3>Price: {item.price}.00 $</h3>

        {/* <h3 className="electronic_text_api_price"> {item.title}!</h3> */}
      </div>
    </div>
  );
}

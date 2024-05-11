import "./CarouselShoesItem.scss";
export default function CarouselShoesItem({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  console.log("item", item);
  console.log("className", className);

  return (
    <>
      <div className={`shoes_container ${className}`}>
        <div style={{ marginBottom: "20px" }}>
          {Array.isArray(item.images) && item.images.length ? (
            <div className="shoes_img">
              <img
                className="shoes_img_api"
                src={item.images[0]}
                alt="no img"
              />
            </div>
          ) : null}

          <h3 className="shoes_text_api_price"> {item.title}!</h3>
        </div>
      </div>
    </>
  );
}

import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";

export default function Carousel({
  items,
}: {
  items: JSX.Element | JSX.Element[];
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{items}</div>
    </div>
  );
}

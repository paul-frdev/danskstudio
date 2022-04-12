export interface ISlider {
  dots?: boolean;
  navigator?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  autoplaySpeed?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  adaptiveHeight: boolean;
  nextArrow: JSX.Element;
  prevArrow: JSX.Element;
}

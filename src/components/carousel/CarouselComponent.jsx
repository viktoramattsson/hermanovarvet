import { Carousel } from '@material-tailwind/react';

const CarouselComponent = ({ imageUrls }) => {
  return (
    <Carousel className="rounded-xl">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};
export default CarouselComponent;

import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className="p-1 home-slider">
      <Carousel.Item interval={2000}>
        <img src="slider1.jpg " text="First slide" className='w-100 p-5 m-1'/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="slider1.jpg" text="Second slide" className='w-100 p-5 m-1'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="slider5.jpg" text="Third slide" className='w-100 p-5 m-1'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className="mt-1 xl:mb-10 mb-1 home-slider ">
      <Carousel.Item interval={2000}>
        <img src="eq2.jpg " text="First slide" className='w-100 m-1 rounded-2xl'/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="eq3.jpg" text="Second slide" className='w-100 m-1 rounded-2xl'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="eq4.jpg" text="Third slide" className='w-100  m-1 rounded-2xl'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
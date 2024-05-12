import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

function CarouselPage() {
  return (
    <div>    
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5 className="text-white">First slide label</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5 className="text-white">Second slide label</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5 className="text-white">Third slide label</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselPage





































// import './Carousel.css'; // Import the custom CSS file
// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import slide1 from '../assets/slide1.jpg';
// import slide2 from '../assets/slide2.jpg';
// import slide3 from '../assets/slide3.jpg';

// function CarouselComponent() {
//   return (
//     <Carousel className="Carousel"> {/* Use the class name "Carousel" */}
//       <Carousel.Item>
//         <img src={slide1} className="d-block w-100" alt="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={slide2} className="d-block w-100" alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={slide3} className="d-block w-100" alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//         </Carousel.Caption>
//       </Carousel.Item>
//       {/* Add other Carousel.Items similarly */}
//     </Carousel>
//   );
// }

// export default CarouselComponent;

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter7.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                A person who feels appreciated will always do more than what is
                expected.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <img src={meter1} alt='Img' />
                  <h5>Html5</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Img' />
                  <h5>Css3</h5>
                </div>
                <div className='item'>
                  <img src={meter4} alt='Img' />
                  <h5>Java Script</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Img' />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src={meter4} alt='Img' />
                  <h5>React JS</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Img' />
                  <h5>Figma</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Img' />
                  <h5>UI-UX</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

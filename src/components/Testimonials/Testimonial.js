import React from 'react';
import './testimonial.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture1 from '../../../src/images/test2.jpg';
import picture2 from '../../../src/images/test3.jpg';
import picture3 from '../../../src/images/test4.jpg';
import picture4 from '../../../src/images/test5.jpg';
import picture5 from '../../../src/images/test6.jpg';
import picture6 from '../../../src/images/test7.jpg';
import picture7 from '../../../src/images/test8.jpg';
import picture8 from '../../../src/images/test9.jpg';
import picture9 from '../../../src/images/test10.jpg';
export default function Testimonial() {
  return (
    <>
      <h3>What people are saying about us</h3>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div id="testmonial">
          <img src={picture1} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Jessica Davis</h3>

            <p>
              I was blown away by the quality of work produced by this company.
              Their web development team exceeded all of my expectations and
              delivered a stunning final product. I highly recommend them for
              any web development needs.
            </p>
          </div>
        </div>

        <div>
          <img src={picture2} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Sarah Taylor</h3>

            <p>
              I was impressed by the level of creativity and attention to detail
              exhibited by this company. They brought my product ideas to life
              in a way that exceeded my expectations. I will definitely be
              working with them again in the future.
            </p>
          </div>
        </div>

        <div>
          <img src={picture3} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Matthew Anderson</h3>

            <p>
              The software development team at this company was top-notch. They
              were able to take my complex software idea and turn it into a
              user-friendly, reliable program. I highly recommend them to anyone
              in need of software development services.
            </p>
          </div>
        </div>

        <div>
          <img src={picture4} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Olivia Johnson</h3>

            <p>
              I was thoroughly impressed with the customer service and
              professionalism of this company. They went above and beyond to
              ensure that my web development project was completed to my
              satisfaction. I highly recommend them to anyone in need of web
              development services.
            </p>
          </div>
        </div>

        <div>
          <img src={picture5} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Elizabeth Jones</h3>

            <p>
              I was thrilled with the level of creativity and innovation
              displayed by this company. They were able to bring my product
              ideas to life in a way that was beyond my wildest expectations. I
              highly recommend them for any product design needs.
            </p>
          </div>
        </div>

        <div>
          <img src={picture6} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Sophia Jones</h3>

            <p>
              The software development team at this company was incredibly
              skilled and efficient. They were able to deliver a high-quality
              product on time and on budget. I highly recommend them for any
              software development needs.
            </p>
          </div>
        </div>

        <div>
          <img src={picture7} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Abigail Martin</h3>

            <p>
              I was extremely happy with the web development services provided
              by this company. They were able to turn my website vision into a
              reality and exceeded all of my expectations. I highly recommend
              them to anyone in need of web development services.
            </p>
          </div>
        </div>

        <div>
          <img src={picture8} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>Chloe Martin</h3>

            <p>
              I was very impressed with the level of professionalism and
              expertise exhibited. They were able to bring my product ideas to
              life in a way that was beyond my expectations. I highly recommend
              them for any product design needs.
            </p>
          </div>
        </div>

        <div>
          <img src={picture9} alt="pencil_testimonials" />
          <div className="myCarousel">
            <h3>John Anderson</h3>

            <p>
              I was thoroughly impressed with the customer service and attention
              to detail exhibited by this company. They went above and beyond to
              ensure that my web development project was completed to my
              satisfaction. I highly recommend them to anyone in need of web
              development services.
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

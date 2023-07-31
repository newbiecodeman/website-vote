import {Container, Row, Col} from "react-bootstrap";
import {testimonial} from "../data/index";

import FaqComponents from "../components/FaqComponents";

const TestimonialPage = () => {
  return ( 
  <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
            <h1 className=" text-center fw-bold " data-aos="fade-up" data-aos-duration="1000">semua testimonial</h1>
            <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Tentang Idolamu</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-lg-1" data-aos="fade-up" data-aos-duration="1000">
          {testimonial.map((data) => {
          return(  
          <Col key={data.id} className="mb-5">
            <p className="desc  shadow-sm">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt="" />
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div> 
            </div>
          </Col>
          );
          })}
          </Row>
        </Container>
      </div>

      <FaqComponents />
      </div>
  )
}

export default TestimonialPage
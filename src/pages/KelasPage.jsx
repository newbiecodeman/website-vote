import {Container, Row, Col} from "react-bootstrap";
import {semuakandidat} from "../data/index";

import FaqComponents from "../components/FaqComponents";

const kandidatPage = () => {
  return( 
  <div className="kandidat-page">
  <div className="kandidat min-vh-100">
    <Container>
      <Row>
        <Col>
        <h1 className="fw-bold text-center" data-aos="fade-up" data-aos-duration="1000">semua kandidat</h1>
        <p className="fw-bold text-center" data-aos="fade-up" data-aos-duration="1000">Pilih Youtuber Favoritmu Sekarang</p>
        </Col>
      </Row>
      <Row>
      {semuakandidat.map((kandidat) => {
                return ( 
                <Col key={kandidat.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kandidat.delay}>
                  <img src={kandidat.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                  <div className="star mb-2 px-3">
                    <i className={kandidat.star1}></i>
                    <i className={kandidat.star2}></i>
                    <i className={kandidat.star3}></i>
                    <i className={kandidat.star4}></i>
                    <i className={kandidat.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kandidat.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kandidat.price}</p>
                    <button className="btn btn-danger rounded-1">{kandidat.buy}</button>
                  </div>
                </Col>
                );
              })}
      </Row>
    </Container>
  </div>

  <FaqComponents/>
</div>
  )  
}

export default kandidatPage
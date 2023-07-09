import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <h3 className="fw-bold">Sagara Vote</h3>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti doloremque mollitia autem eligendi quae cupiditate. Earum, architecto? Ipsum, excepturi!</p>
          <div className="no" mb-1 mt-4>
            <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <p className="m-0">+62 123-4567-8912</p>
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">person@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info selanjutnya</h5>
          <div className="subscribes">
            <input type="text" placeholder="subscribe..." />
            <button className="btn btn-danger rounded-end rounded-0">subscribe</button>
          </div>
          <div className="social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; copyright {new Date() .getFullYear()} by <span className="fw-bold">Sagara</span> , all right reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponents
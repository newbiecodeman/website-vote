import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import {kandidatTerbaru, dataSwiper} from "../data/index";
import {useNavigate} from "react-router-dom"
import FaqComponents from "../components/FaqComponents";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
let navigate = useNavigate()

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 ">
          <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5">
              <Col lg="6" data-aos="fade-down" data-aos-duration="1500">
                <h1 className="mb-4 animate__animated animate__fadeInUp" >
                  Temukan <br /> <span>youtuber favoritmu</span> <br />  Bersama Kami!
                </h1> 
                <p className="mb-4">Sagara Vote Menyediakan Akses agar anda semua bisa mendukung atau memilih youtuber favorit kalian hanya dengan memvote youtuber favorit kalian sebanyak mungkin! </p>
                <button className="btn btn-danger btn-1g rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("kandidat")}>Lihat kandidat</button>
                <button className="btn btn-outline-danger btn-1g rounded-1 mb-xs-0 mb-2" onClick={() => navigate("/login")}>Vote Now!</button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5" data-aos="fade-down" data-aos-duration="1500" >
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kandidat w-100 min-vh-100">
          <container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold" data-aos="fade-up" data-aos-duration="1000">kandidat</h1>
              <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Pilih Youtuber Favoritmu Sekarang!</p>
              </Col>
            </Row>
            <Row>
              {kandidatTerbaru.map((kandidat) => {
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
            <Row>
              <Col className="text-center" >
              <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/kandidat")}>
                Lihat Semua kandidat <i className="fa-solid fa-chevron-riht ms-1"></i>
              </button>
              </Col>
            </Row>
          </container>
        </div>
        <div className="testimonial py-5">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold my-5" data-aos="fade-up" data-aos-duration="1000">Testimonial</h1>
              </Col>
            </Row>
            <Row>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return(  
          <SwiperSlide key={data.id} className="shadow-sm" data-aos="fade-up" data-aos-duration="1000">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt="" />
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div> 
            </div>
          </SwiperSlide>
          );
          })}
      </Swiper>
            </Row>
          </Container>
        </div>
        {/* section faq */}
        <FaqComponents />
        {/* section faq */}
    </div>
  );
};

export default HomePage;
import {Container, Row, Col} from "react-bootstrap"
import FaqComponents from "../components/FaqComponents"

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page" data-aos="fade-up" data-aos-duration="1000">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center mb-2">syarat & ketentuan</h1>
            <p className="text-center">Syarat & ketentuan yang harus dilakukan sebelum memvote</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <p>Hai Para pecinta rebahan dirumah sambil menonton youtuber kesayangan kalian, disini kalian bisa memilih atau mendukung youtuber favorit kalian dengan hanya sekali klik, kalian bisa membantu youtuber kesayangan kalian untuk mendapatkan awards</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">1. subscribe dulu</h4>
            <p>disini agar kalian mendapat akses untuk memvote kalian hanya cukup subscribe akun youtube kami dan beberapa akun media sosial kami hanya degan memfollow</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
           <h4 className="fw-bold">2. Registrasi</h4>
           <p>Registrasi terlebih dahulu agar kalian bisa mengakses segala macam fitur di website ini, seperti voting, comment dan lain lain.</p> 
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">3. No Sarkasme</h4>
            <p>kita tau kalian pasti ada pilihan masing masing tetapi tolong hormati para youtuber lain yang tidak kalian pilih ya teman teman, mereka juga mempunyai fans fans mereka sendiri, jangan sampai ada keributan antar sesama fans yaa</p>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponents />
    </div>
  )
}

export default SyaratKetenPage
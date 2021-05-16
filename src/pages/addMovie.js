import { Col, Container, Row } from "react-bootstrap";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

const AddMovie = _ => {

  return (
  <>
    <section>
      <Container>
        <Row>
          <Col>
            <header>
              <h2>Add New Movie</h2>
              <hr />
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <AddMovieForm />
          </Col>
        </Row>
      </Container>
    </section>
  </>
)};

export default AddMovie;
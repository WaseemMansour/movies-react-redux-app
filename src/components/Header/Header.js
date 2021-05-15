import { Row, Col, Container } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = _ => (
  <header className={styles.header}>
    <Container>
      <Row>
        <Col>
          <h1 className={styles.header_appTitle}><span><i className="fas fa-film"></i> Movies</span> App</h1>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
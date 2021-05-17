import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = _ => (
  <header className={styles.header} data-testid="headerComponentView">
    <Container>
      <Row>
        <Col>
          <h1 className={styles.header_appTitle}><Link to="/"><span><i className="fas fa-film"></i> Movies</span> App</Link></h1>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
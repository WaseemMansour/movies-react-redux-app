import { Col, Container, Row, Button } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.scss';

const MoviesList = ({title, data, canAddToList}) => (
  <section className={styles.moviesSection}>
    <Container>
      <Row>
        <Col>
          <header>
            <h2 className={styles.moviesSection_title}>{title}</h2>
            {
              canAddToList 
              ? <Button className={styles.moviesSection_btn}><i className="fa fa-plus"></i> Add Movie</Button> 
              : null
            }
            <hr />
          </header>
          {
            canAddToList && !data.length
            ? <p>Add your own movies to this list.</p>
            : <ul className={styles.moviesSection_list}>
                {data.map(movie => (
                  <MovieCard key={movie.id} movie={movie} className={styles.moviesSection_movieCard} />
                ))}
              </ul>
          }

        </Col>
      </Row>
    </Container>
    
  </section>
)

export default MoviesList;
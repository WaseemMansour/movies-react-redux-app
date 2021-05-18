import React, { useCallback, useRef } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { setPageNum } from '../../store/actions/movies';
import { connect, useDispatch } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.scss';
import { Link } from 'react-router-dom';

const MoviesList = ({title, data, canAddToList, infiniteScroll, isLoading, page, totalPages}) => { 
  const dispatch = useDispatch();
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {

    if (isLoading) return;
    if(observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // To avoid calling previous page - In case Back from Add New Movie Route
        if(page <= totalPages) {
          dispatch(setPageNum('moviesdb', page + 1));
        }
      }
    }, {threshold: 1});

    // Observe If Last Element with Ref
    if (node) {
      observer.current.observe(node);
    }
    
  }, [isLoading, page, totalPages, dispatch])
  
  return (
    <section data-testid="moviesListView" className={styles.moviesSection}>
      <Container>
        <Row>
          <Col>
            <header>
              <h2 className={styles.moviesSection_title}>{title}</h2>
              {
                canAddToList 
                ? <Link to="/add-movie">
                    <Button className={styles.moviesSection_btn}><i className="fa fa-plus"></i> Add Movie</Button>
                  </Link>
                : null
              }
              <hr />
            </header>
            {
              canAddToList && !data.length
              ? <p>Add your own movies to this list.</p>
              : <ul className={styles.moviesSection_list}>
                  {data.map((movie, index) => {
                    // Add Ref to Last MovieCard Element
                    if (data.length === index + 1 && data.length >= 20) {
                      const MovieCardWithRef = React.forwardRef((props, ref) => (
                        <MovieCard {...props} innerRef={ref} />
                      ));
                      return <MovieCardWithRef ref={lastMovieElementRef} key={`${movie.title}-${movie.release_date}`} movie={movie} className={styles.moviesSection_movieCard} />
                    } else {
                      return <MovieCard key={`${movie.title}-${movie.release_date}`} movie={movie} md="6" className={`${styles.moviesSection_movieCard} md-4`} />
                    }
                    
                  })}
                </ul>
              }

            {
              infiniteScroll && isLoading
              ? <div data-testid="spinnerView" className={styles.spinner}>
                  <div className={styles.spinnerIcon}></div>
                </div>
              : null
            }

          </Col>
        </Row>
      </Container>
      
    </section>
  )
};

const mapStateToProps = ({moviesdb: {isLoading, page, totalPages}}) => {
  return {
    isLoading, 
    page, 
    totalPages
  }
}

export default connect(mapStateToProps)(MoviesList);
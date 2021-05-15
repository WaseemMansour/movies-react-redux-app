import styles from './MovieCard.module.scss';
import posterPlaceholder from '../../poster_placeholder.png';

const MovieCard = ({movie}) => (
  <article className={styles.movieCard}>
    <div 
      className={styles.moviePoster} 
      style={{backgroundImage: `url(${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : posterPlaceholder })`}}
    >
      <div className={styles.movieRateAndYear}>
        <span>{movie.release_date.split('-')[0]}</span>
        <span><i className="fas fa-star"></i> {movie.vote_average} /10</span>
      </div>
      <div className={styles.movieOverview}>
        <p>{movie.overview}</p>
      </div>
    </div>
    <div className={styles.movieInfo}>
      <p>{movie.title}</p>
    </div>
  </article>
);

export default MovieCard;
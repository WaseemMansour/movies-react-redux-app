import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMovie } from "../../store/actions/movies";
import styles from './AddMovieForm.module.scss';

const AddMovieForm = _ => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [posterBase64, setPosterBase64] = useState();
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    await convertToBase64(file);
  }

  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        setPosterBase64(fileReader.result)
        resolve(fileReader.result);
      };

      fileReader.onError = (error) => {
        reject(error);
      };
    })
  }

  const onSubmit = data => {
    const { title, year, overview } = data;

    dispatch(addMovie({title, release_date: year, poster_path: posterBase64, overview}));
    history.push('/')
  }

  return (
    <Form data-testid="addMovieFormView" onSubmit={handleSubmit(onSubmit)} className={styles.movieForm} noValidate>
      <Row>
        <Col md="6">
          <Form.Group controlId="formControlMovieName">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              {...register("title", { required: true })}
              type="text" 
              placeholder="Movie Title" 
              isInvalid={!!errors.title}  
              />
            {
              errors.title 
              && <Form.Control.Feedback role="alert" type="invalid" style={{display:'block'}}>
                  Required Field
                </Form.Control.Feedback>
            }
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group controlId="formControlMovieYear">
            <Form.Label>Year</Form.Label>
            <Form.Control 
              {...register("year", { required: true })}
              type="text" 
              placeholder="Movie Release Year" 
              isInvalid={!!errors.year}    
              />
            {
              errors.year 
              && <Form.Control.Feedback role="alert" type="invalid">
                  Required Field
                </Form.Control.Feedback>
            }
          </Form.Group>
        </Col>
        <Col md="12">
          <Form.Group controlId="formControlMovieOverview">
            <Form.Label>Overview</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              {...register("overview", { required: true })}
              placeholder="Movie Overview"
              isInvalid={!!errors.overview}
              />
            {
              errors.overview 
              && <Form.Control.Feedback role="alert" type="invalid">
                  Required Field
                </Form.Control.Feedback>
            }
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group>
            <Form.File
              data-testid="posterUploadInput" 
              {...register("poster")}
              id="formControlFile"
              label="Movie Poster"
              isInvalid={!!errors.poster}
              onChange={(e)=> uploadImage(e) }
              />
            {
              errors.poster
              && <Form.Control.Feedback role="alert" type="invalid">
                  Required Field
                </Form.Control.Feedback>
            }  
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-testid="movieSubmitBtn" type="submit" className="btn btn-primary">Submit</button>
        </Col>
      </Row>  
    </Form>  
  )
};

export default AddMovieForm;
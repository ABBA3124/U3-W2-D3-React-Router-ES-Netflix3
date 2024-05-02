import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import "./MovieDetails.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function MovieDetails() {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState(null)
    const [comments, setComments] = useState([])
    const API_KEY = "1e8e8b46"
    const navigate = useNavigate()
  //stati per il form
  const [review, setReview] = useState("")
  const [submitStatus, setSubmitStatus] = useState(null)
  const [rate, setRate] = useState("1")

  useEffect(() => {
    // dettagli dei film provenienti da api omdb
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
            navigate("/not-found"); 
          } else {
            setMovieDetails(data);
          }
        })
        .catch((error) => {
          console.error("Errore della fetch moviedetails:", error);
          navigate("/not-found");
        });

    //  commenti provenienti da api di strive usando id del film
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ2NjI0MDIsImV4cCI6MTcxNTg3MjAwMn0.QFgE7h1MfDt_J1tXHy6qO3Agf5rB18trIB-tn6eR5iY",
      },
    })
    .then((response) => response.json())
    .then((data) => setComments(data))
    .catch((error) => console.error("Errore della fetch comments:", error))
}, [movieId, navigate])
  if (!movieDetails) return <p>Caricamento...</p>

  //metedo che ho trovato per formattare date con js nativo
  function formatDate(dateString) {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString("it-IT", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      }) +
      " " +
      date.toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }

  // Gestione del cambiamento rate
  const handleRateChange = (e) => {
    setRate(e.target.value)
  }

  function handleDeleteComment(commentId) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ2NjI0MDIsImV4cCI6MTcxNTg3MjAwMn0.QFgE7h1MfDt_J1tXHy6qO3Agf5rB18trIB-tn6eR5iY`,
      },
    }

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossibile eliminare il commento")
        }
        // filtra i commenti per rimuovere quello eliminato dallo stato
        setComments(comments.filter((comment) => comment._id !== commentId))
      })
      .catch((error) => console.error("Error:", error))
  }

  //gestione per l'invio del form
  function handleReviewSubmit(e) {
    e.preventDefault()
    if (!review.trim()) {
      setSubmitStatus("inserisci una recensione valida.")
      return
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ2NjI0MDIsImV4cCI6MTcxNTg3MjAwMn0.QFgE7h1MfDt_J1tXHy6qO3Agf5rB18trIB-tn6eR5iY`,
      },
      body: JSON.stringify({ elementId: movieId, comment: review, rate: rate }),
    }

    fetch("https://striveschool-api.herokuapp.com/api/comments/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setSubmitStatus("Recensione inviata con successo!")
        setComments([...comments, data])
        setReview("")
        setRate("1")
      })
      .catch((error) => {
        console.error("Errore durante l’invio della recensione:", error)
        setSubmitStatus("Errore durante l’invio della recensione.")
      })
  }

  return (
    <Row className="mt-5 text-white">
      <Col xl={1} xxl={2}></Col>
      <Col xs={12} lg={4} xl={3} xxl={2}>
        <img src={movieDetails.Poster} alt="immagine del film" className="img-fluid" />
      </Col>
      <Col xs={12} lg={6} xl={6} xxl={6}>
        <h1>{movieDetails.Title}</h1>
        <hr />
        <h6>
          {" "}
          <strong>Pubblicato:</strong> {movieDetails.Released}
        </h6>
        <h6>
          <strong>Durata:</strong> {movieDetails.Runtime}
        </h6>
        <h6>
          <strong>Categoria:</strong> {movieDetails.Genre}
        </h6>
        <h6>
          <strong>Attori:</strong> {movieDetails.Actors}
        </h6>
        <h6>
          <strong>Regia:</strong> {movieDetails.Director}
        </h6>
        <hr />
        <h5 className="mt-4">Trama</h5>
        <p className="text-warning">{movieDetails.Plot}</p>
        <hr />
        <div className="mt-2">
          {/*form per le recensioni*/}
          <form onSubmit={handleReviewSubmit} className="review-form mb-3">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Scrivi la tua recensione."
              rows="3"
              className="form-control mb-2"
            />
            <select value={rate} onChange={handleRateChange} className=" d-inline mb-2 me-5 bg-black text-white ">
              <option value="1">(1)⭐</option>
              <option value="2">(2)⭐⭐</option>
              <option value="3">(3)⭐⭐⭐</option>
              <option value="4">(4)⭐⭐⭐⭐</option>
              <option value="5">(5)⭐⭐⭐⭐⭐</option>
            </select>
            <button type="submit" className="btn btn-danger w-75 ">
              Invia Recensione
            </button>
            {submitStatus && <div className="">{submitStatus}</div>}
          </form>

          <h3>Commenti</h3>
          {comments.length > 0 ? (
            <div>
              {comments.map((comment) => (
                <div key={comment._id}>
                  <h5>🗒️{comment.comment}</h5>
                  <p>
                    {[...Array(parseInt(comment.rate))].map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </p>
                  <p>🙋{comment.author}</p>
                  <p>✍️{formatDate(comment.createdAt)}</p>
                  <p className="d-inline">Ultimo Aggiornamento: {formatDate(comment.updatedAt)}</p>
                  <i className="bi bi-trash3 btn btn-danger ms-3" onClick={() => handleDeleteComment(comment._id)}></i>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <h5>Nessun Commento.</h5>
          )}
        </div>
      </Col>
    </Row>
  )
}

export default MovieDetails

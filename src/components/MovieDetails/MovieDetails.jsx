import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "react-bootstrap"

function MovieDetails() {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)
  const [comments, setComments] = useState([])
  const API_KEY = "1e8e8b46"

  useEffect(() => {
    // dettagli dei film provenienti da api omdb
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data)
      })
      .catch((error) => console.error("Errore della fetch moviedetails:", error))

    //  commenti provenienti da api di strive usando id del film
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjE0ODdmMzA0NjAwMWFlNTlmODkiLCJpYXQiOjE3MTQ2NjI0MDIsImV4cCI6MTcxNTg3MjAwMn0.QFgE7h1MfDt_J1tXHy6qO3Agf5rB18trIB-tn6eR5iY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data)
      })
      .catch((error) => console.error("Errore della fetch comments:", error))
  }, [movieId])

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
          <h3>Commenti</h3>
          {comments.length > 0 ? (
            <div>
              {comments.map((comment) => (
                <div key={comment._id}>
                  <h5>🗒️{comment.comment}</h5>
                  <p>{comment.rate}/5⭐</p>
                  <p>🙋{comment.author}</p>
                  <p>✍️{formatDate(comment.createdAt)}</p>
                  <p>Ultimo Aggiornamento: {formatDate(comment.updatedAt)}</p>
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

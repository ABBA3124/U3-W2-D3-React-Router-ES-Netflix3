import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./MovieGallery.css"
import Spinner from "react-bootstrap/Spinner"

function MovieGallery({ title, categories }) {
  const { searchTerm } = useParams() 
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const API_KEY = "1e8e8b46"
  const baseAPI_URL = "http://www.omdbapi.com/"
  const API_URL = searchTerm
    ? `${baseAPI_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`
    : `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search)
        } else {
          setMovies([])
        }
        setLoading(false)
      })
      .catch((error) => console.error("Errore nella fetch: ", error))
      
      
  }, )

  if (loading) {
    return (
      <div className='d-flex align-items-center" mt-3 mb-3'>
        <h2 className="text-white me-3">Caricamento in Corso...</h2>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if (movies.length === 0) {
    

    return (
      <div className="text-center text-secondary mt-5 mb-5">
        <h1>
          Nessun film trovato
        </h1>
        <Link to="/" className="btn btn-primary mt-3">Torna alla Home</Link>
      </div>
    )
  }

  const settings = {
    centerMode: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 1226,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movie-details/${movieId}`)
  }

  return (
    <div className="mt-5">
      <h2 className="text-white fs-4">{categories}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie provaa" onClick={() => handleMovieClick(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} style={{ width: "160px" }} className="mb-2" />
            <h4 style={{ fontSize: "15px", width: "120px" }} className="text-white">
              {movie.Title}
            </h4>
            <h4 style={{ fontSize: "15px", width: "120px" }} className="text-white">
              {movie.Year}
            </h4>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MovieGallery

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer/Footer.jsx"
import CustomNavbar from "./components/Navbar/CustomNavbar.jsx"
import MovieGallery from "./components/MovieGallery/MovieGallery.jsx"
import FilterGenres from "./components/FilterGenres/FilterGenres.jsx"
import "bootstrap-icons/font/bootstrap-icons.css"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SettingsPage from "./components/SettingsPage/SettingsPage.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  TVShowsPage  from "./components/TVShowsPage/TVShowsPage.jsx"
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black">
        <main className="bg-black mx-5">
          <CustomNavbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterGenres />
                  <MovieGallery title="action" categories="Titoli consigliati" />
                  <MovieGallery title="transformers" categories="Titoli che potrebbero piacerti" />
                  <MovieGallery title="Harry Potter" categories="Trending Now" />
                  <MovieGallery title="fast and furious" categories="Perché hai guardato Need For Speed" />
                  <MovieGallery title="Lord of the Rings" categories="Watch It Again" />
                  <MovieGallery title="Star Wars" categories="New Releases" />
                  <MovieGallery title="dkhbfjhsbhdf" categories="Titoli consigliati" />{" "}
                  {/* lasciato appositamente per far vedere che se non trova riscontro ci avvisa */}
                </>
              }
            />
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Tv-Shows" element={<TVShowsPage />} />
            <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

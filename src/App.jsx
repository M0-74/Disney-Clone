import Header from "./components/Header"
import Slider from "./components/Slider"
import ProductionHouse from "./components/ProductionHouse"
import GenreMovieList from "./components/GenreMovieList"
import './App.css'
const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App

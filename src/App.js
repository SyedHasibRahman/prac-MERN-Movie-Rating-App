import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container-main">
          <Routes>
            <Route index element={ <Home /> } />
            <Route path="/movie/:imdbID" element={ <MovieDetail /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

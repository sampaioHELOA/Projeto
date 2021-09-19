
import react, { useEffect, useState } from 'react';
import './App.css';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import featuredMovie from './components/featuredMovie';

export default () => {

  const [MovieList, setMovieList] = useState([]);
  const [featureData, setfeaturedData] = useState(null);

useEffect(()=> {
  const loadALL = async () => {
    // Pegando a Lista Total
    let list  = await tmdb.getHomeList();
    setMovieList(list);
    

  }
  loadALL();
}, []);

return (
  <div className="page">
    {featureData &&
    <featuredMovie item={featureData} />
    }

     <section className="lists">
    {MovieList.map((item, key)=>(
      <MovieRow  key={key} title={item.title} items={item.items}/>
      ))}  
    </section>
    <footer>
      Feito com <span role="img" aria-label="coração">❤️</span> por Heloa Sampaio Paulino<br/>
      Direitos  de imagem para Netflix<br/>
      Dados pegos do site Themoviedb.org 
    </footer>

  </div>
);

}
import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { Footer } from '../components/Footer';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const RES = await fetch('http://localhost:3000/initalState');
      const DATA = await RES.json();
      console.log(DATA);
      setVideos(DATA);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Search />
      <Categories title="Mi Lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Categories } from '../components/Categories';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { Footer } from '../components/Footer';
import { useInitialState } from '../hooks/useInitialState';

function App() {
  const initialState = useInitialState(
    'http://localhost:3000/initalState',
  );

  return (
    <div className="app">
      <Header />
      <Search />
      {initialState && initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState &&
              initialState.mylist.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState &&
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState &&
            initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;

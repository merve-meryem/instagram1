import React, { useState } from 'react';
import AramaCubugu from './components/AramaCubugu/AramaCubugu';

/* 
  ADIM 0: AramaCubugu'nu import edebilirsin.
  */
import Gonderiler from './components/Gonderiler/Gonderiler.jsx';
import sahteVeri from './sahteVeri.js';
import './App.css';

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('');

  const aramaHandler = (event) => {
    const { value } = event.target;
    setAramaKriteri(value);
    if (value === '') {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonucu = gonderiler.filter((gonderi) => {
      return gonderi.username.toLowerCase().includes(value.toLowerCase());
    });
    setGonderiler(aramaSonucu);
  };
  /* 
  ADIM 1: Burada bir change Handler fonskiyonu yazabilirsin.
  */

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      {/* Adım 2: AramaCubugu'nu doğru proplar ile ekle.*/}
      <AramaCubugu aramaHandler={aramaHandler} aramaKriteri={aramaKriteri} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;

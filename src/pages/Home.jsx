import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">
          Punčocháčky a ponožky <span>LUANA</span>
        </h1>
        <p className="hero__paragraph">
          Výprodej skladových zásob znamé, kvalitní <span>české</span> značky za
          příznívé ceny.
        </p>
      </section>
      <section className="background-one"></section>
      <section className="info">
        <h2 className="info__heading">To nejlepší pro děti</h2>
        <p className="info__paragraph">
          Při výrobě byly použiy jen ty <span>nejkvalitnější</span> suroviny pro
          pohodlí a zdraví. Ponožky se vyrábí z kvalitní <span>bavlny</span> a{' '}
          <span>bambusu</span> který je hypoalergenní a jemnný na dotek. Také
          obsahují <span>aloe vera</span> jež má pozitivní účinky na pokožku a
          zdraví.
        </p>
      </section>
      <section className="background-two"></section>
      <section className="cta">
        <h2 className="cta__heading">Co nabízíme</h2>
        <p className="cta__paragraph">
          Kromě dětských punčocháčků s <span>kšandy</span> nebo bez, si mužete
          také vybrat z <span>ponožek</span> jak pro <span>děti</span>, tak pro
          dospělé.
        </p>
        <button
          onClick={() => {
            navigate('/products');
          }}
          className="cta__button"
        >
          Prohlédnout nabídku
        </button>
        <p className="cta__paragraph">
          V případě zájmu nás prosím{' '}
          <Link className="cta__link" to={'/contact'}>
            kontaktujte zde
          </Link>
          .
        </p>
      </section>
    </>
  );
}

export default Home;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className={classes.hero}>
        <h1 className={classes.heroTitle}>
          Punčocháčky a ponožky <span>LUANA</span>
        </h1>
        <p className={classes.heroParagraph}>
          Výprodej skladových zásob znamé, kvalitní <span>české</span> značky za
          příznívé ceny.
        </p>
      </section>
      <section className={classes.backgroundOne}></section>
      <section className={classes.info}>
        <h2 className={classes.infoHeading}>To nejlepší pro děti</h2>
        <p className={classes.infoParagraph}>
          Při výrobě byly použiy jen ty <span>nejkvalitnější</span> suroviny pro
          pohodlí a zdraví. Ponožky se vyrábí z kvalitní <span>bavlny</span> a{' '}
          <span>bambusu</span> který je hypoalergenní a jemnný na dotek. Také
          obsahují <span>aloe vera</span> jež má pozitivní účinky na pokožku a
          zdraví.
        </p>
      </section>
      <section className={classes.backgroundTwo}></section>
      <section className={classes.cta}>
        <h2 className={classes.ctaHeading}>Co nabízíme</h2>
        <p className={classes.ctaParagraph}>
          Kromě dětských punčocháčků s <span>kšandy</span> nebo bez, si mužete
          také vybrat z <span>ponožek</span> jak pro <span>děti</span>, tak pro
          dospělé.
        </p>
        <button
          onClick={() => {
            navigate('/products');
          }}
          className={classes.ctaButton}
        >
          Prohlédnout nabídku
        </button>
        <p className={classes.ctaParagraph}>
          V případě zájmu nás prosím{' '}
          <Link className={classes.ctaLink} to={'/contact'}>
            kontaktujte zde
          </Link>
          .
        </p>
      </section>
    </>
  );
}

export default Home;

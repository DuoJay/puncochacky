import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import socksGreen from '../assets/images/socks-green.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">
          punčocháčky a ponožky značky
          <div className="hero__loana"></div>
          {/* SUB WITH LOANA LOGO */}
        </h1>
        <p className="hero__paragraph">
          Doprodej skladových zásob znamé, kvalitní <span>české</span> značky za
          příznivé ceny.
        </p>
      </section>
      <section className="background-one"></section>
      <section className="info">
        <div className="info__text">
          <h2 className="info__text-heading h2">To nejlepší pro děti</h2>
          <p className="info__text-paragraph">
            Při výrobě byly použity jen vysoce kvalitní <span>materiály</span>,
            pro zajištění co největšího <span>pohodlí.</span> Díky prvkům, jako
            jsou například <span>aloe vera</span> nebo <span>bambus</span>,
            který má hypoalergenní účinky, mají naše produkty pozitivní vliv i
            na <span>Vaše zdraví</span>.
          </p>
        </div>
        <div className="info__image">
          <img src={socksGreen} alt="ponožky" />
        </div>
      </section>
      <section className="background-two"></section>
      <section className="cta">
        <h2 className="cta__heading h2">Co nabízíme</h2>
        <p className="cta__paragraph">
          Kromě dětských punčocháčků s <span>kšandami</span> nebo bez, si můžete
          také vybrat z <span>ponožek</span> jak pro <span>děti</span>, tak pro
          dospělé.
        </p>
        <button
          onClick={() => {
            navigate('/category');
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

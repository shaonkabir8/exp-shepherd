import React from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import steps from "./Steps";
import "./Style.scss";

const App = () => {
  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    useModalOverlay: true
  };

  // start tour
  function Button() {
    const tour = React.useContext(ShepherdTourContext);

    return (
      <button className="boxed-btn" onClick={tour.start}>
        Start Tour
      </button>
    );
  }

  return (
    <ShepherdTour tourOptions={tourOptions} steps={steps}>
      <div className="container">
        <header className="header">
          <div className="logo">
            <a className="logo__img" href="/">
              React Shepherd
            </a>
          </div>
          <nav className="nav">
            <ul className="nav__item">
              <li className="nav__list">
                <a href="#Home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__list">
                <a href="#About" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__list">
                <a href="#Services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__list">
                <a href="#Blog" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__list">
                <a href="#Contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="hero-section">
          <Button />
          <div className="hero">
            <h1 className="hero__text">
              Lorem ipsum dolor sit.
              <span className="hero__text--sub">
                Lorem ipsum dolor sit amet.
              </span>
            </h1>
            <a href="#About" className="boxed-btn">
              Read more &#8594;
            </a>
          </div>
        </section>
        <main className="dummy">
          <div className="dummy__left">
            <h3 className="dummy__heading">Dummy Left Heading</h3>
            <p className="dummy__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              cum ullam sapiente hic sed labore temporibus quod, deleniti,
              perferendis a dignissimos repellat iste tenetur saepe deserunt
              repellendus eos corporis! Suscipit voluptates itaque magni
              possimus facilis, officiis aliquam cum officia quia?
            </p>
            <a href="#sdlkjf" className="bordered-btn">
              Read more &#8594;
            </a>
          </div>
          <div className="dummy__right">
            <h3 className="dummy__heading">Right Dummy Heading</h3>
            <p className="dummy__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              cum ullam sapiente hic sed labore temporibus quod, deleniti,
              perferendis a dignissimos repellat iste tenetur saepe deserunt
              repellendus eos corporis! Suscipit voluptates itaque magni
              possimus facilis, officiis aliquam cum officia quia?
            </p>
            <a href="#sdlkjf" className="bordered-btn">
              Read more &#8594;
            </a>
          </div>
        </main>
        <footer className="footer">
          <p className="footer__copyright">
            All rights reserved &copy; Shaon Kabir
          </p>
        </footer>
      </div>
    </ShepherdTour>
  );
};

export default App;

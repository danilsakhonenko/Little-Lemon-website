import React from "react";
import PreviewPhoto from "../images/restauranfood.jpg";
import chefPhotoA from "../images/Mario and Adrian a.jpg";
import chefPhotoB from "../images/Mario and Adrian b.jpg";
import chefPhoto from "../images/restaurant chef.jpg";
import CardsContainer from "./CardsContainer";
import SpecialsList from './SpecialsList';
import ReviewsList from "./ReviewsList";
import { Link } from "react-router-dom";

function HomePage() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere.";
  return (
    <main id='main'>
      <section id="hero-section" className="container">
        <div className="text-block">
          <h1>Little Lemon</h1>
          <h2 className="white">Chicago</h2>
          <p className="lead-text white">{lorem}</p>
        </div>
        <Link to='/booking' id='reserve-button' className="action-button lead-text">
          Reserve a table
        </Link>
        <div id="white-space"></div>
        <img
          src={PreviewPhoto}
          id="preview-photo"
          alt="Preview of the food"
        />
      </section>
      <section id="highlights" className="container">
        <h2>This weeks specials!</h2>
        <Link to='/' id='menu-button' className="action-button lead-text">
          Online Menu
        </Link>
        <CardsContainer>
          <SpecialsList/>
        </CardsContainer>
      </section>
      <section id="testimonials" className="container">
        <h2 className="white">Testimonials</h2>
        <CardsContainer>
          <ReviewsList/>
        </CardsContainer>
      </section>
      <section id="about" className="container">
        <div className="text-block">
          <h2>Little Lemon</h2>
          <h2>Chicago</h2>
          <p className="lead-text">{lorem}</p>
        </div>
        <img
          src={chefPhotoA}
          id="chef-photo-a"
          alt="Restaurant chefs"
        />
        <img
          src={chefPhoto}
          id="chef-photo"
          alt="Restaurant chef"
        />
        <img
          src={chefPhotoB}
          id="chef-photo-b"
          alt="Restaurant chefs"
        />
      </section>
    </main>
  );
}

export default HomePage;

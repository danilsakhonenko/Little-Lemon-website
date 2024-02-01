import React from "react";
import PreviewPhoto from "../restauranfood.jpg";
import ActionButton from "./ActionButton";
import chefPhotoA from "../Mario and Adrian a.jpg";
import chefPhotoB from "../Mario and Adrian b.jpg";
import chefPhoto from "../restaurant chef.jpg";
import CardsContainer from "./CardsContainer";
import SpecialsList from './SpecialsList';
import ReviewsList from "./ReviewsList";

function HomePage() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere.";
  return (
    <main>
      <section id="hero-section" className="container">
        <div className="text-block">
          <h1>Little Lemon</h1>
          <h2 className="white">Chicago</h2>
          <p className="lead-text white">{lorem}</p>
        </div>
        <ActionButton
          link="/booking"
          label="Reserve a table"
          id="reserve-button"
        />
        <div id="white-space"></div>
        <img
          src={PreviewPhoto}
          className="image"
          id="preview-photo"
          alt="Preview of the food"
        />
      </section>
      <section id="highlights" className="container">
        <h2>This weeks specials!</h2>
        <ActionButton label="Online Menu" id="menu-button" />
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
          className="image"
          id="chef-photo-a"
          alt="Preview of the food"
        />
        <img
          src={chefPhoto}
          className="image"
          id="chef-photo"
          alt="Preview of the food"
        />
        <img
          src={chefPhotoB}
          className="image"
          id="chef-photo-b"
          alt="Preview of the food"
        />
      </section>
    </main>
  );
}

export default HomePage;

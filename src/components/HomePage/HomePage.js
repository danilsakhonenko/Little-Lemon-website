import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import PreviewPhoto from "../../images/restauranfood.jpg";
import chefPhotoA from "../../images/Mario and Adrian a.jpg";
import chefPhotoB from "../../images/Mario and Adrian b.jpg";
import chefPhoto from "../../images/restaurant chef.jpg";
import CardsContainer from "../Cards/CardsContainer";
import SpecialsList from '../Cards/DishCard/SpecialsList';
import ReviewsList from "../Cards/UserReviewCard/ReviewsList";
import styles from './HomePage.module.css'

function HomePage() {
  const shortRestDescription =
    "Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Immerse yourself in the vibrant flavors of our region, where each dish is crafted with love and care, ensuring a dining experience that delights the senses and leaves a lasting impression.";
  const longRestDescription1 = `Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.Step into our cozy dining space and embark on a culinary journey through the heart of the Mediterranean.`;
  const longRestDescription2 = `Our commitment to quality ingredients and meticulous preparation shines through in every bite. Whether you're joining us for a casual lunch with friends or a romantic dinner for two, our warm hospitality and delectable cuisine will make you feel right at home.`;
  return (
    <main className={styles.main}>
      <article className={`${styles.hero} container`}>
        <div className="text-block">
          <h1>Little Lemon</h1>
          <h2 className="white">Chicago</h2>
          <p className="lead-text white">{shortRestDescription}</p>
        </div>
        <ActionButton link='/booking' style={styles.reserveButton} disabled='false' role="button" type="button" value="Reserve a table" />
        <div className={styles.space}></div>
        <img
          src={PreviewPhoto}
          className={styles.preview}
          alt="Preview of the food"
        />
      </article>
      <section className={`${styles.highlights} container`}>
        <h2>This weeks specials!</h2>
        <ActionButton link='/' style={styles.menuButton} disabled='false' role="button" type="button" value="Online Menu" />
        <CardsContainer>
          <SpecialsList/>
        </CardsContainer>
      </section>
      <section className={`${styles.testimonials} container`}>
        <h2 className="white">Testimonials</h2>
        <CardsContainer>
          <ReviewsList/>
        </CardsContainer>
      </section>
      <article className={`${styles.about} container`}>
        <div className="text-block">
          <h2>Little Lemon</h2>
          <h2>Chicago</h2>
          <p className="lead-text">{longRestDescription1}<br />{longRestDescription2}</p>
        </div>
        <img
          src={chefPhotoA}
          className={styles.chefA}
          alt="Restaurant chefs"
        />
        <img
          src={chefPhoto}
          className={styles.chef}
          alt="Restaurant chef"
        />
        <img
          src={chefPhotoB}
          className={styles.chefB}
          alt="Restaurant chefs"
        />
      </article>
    </main>
  );
}

export default HomePage;

import React from 'react'
import PreviewPhoto from '../restauranfood.jpg';
import ActionButton from './ActionButton';
import DishCard from './DishCard';
import UserReviewCard from './UserReviewCard';
import GreekSaladImg from '../greek salad.jpg';
import BruchettaImg from '../bruchetta.png';
import LemonDessertImg from '../lemon dessert.jpg';
import chefPhotoA from '../Mario and Adrian a.jpg';
import chefPhotoB from '../Mario and Adrian b.jpg';
import chefPhoto from '../restaurant chef.jpg';

function Main() {
  let lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere."
  return (
    <main>
      <section id="hero-section" className='container'>
        <div className='text-block'>
          <h1>Little Lemon</h1>
          <h2 className='white'>Chicago</h2>
          <p className='lead-text white'>{lorem}</p>
        </div>
          <ActionButton label="Reserve a table" id="reserve-button"/>
          <div id='white-space'></div>
          <img src={PreviewPhoto} className='image' id="preview-photo" alt='Preview of the food'/>
      </section>
      <section id="highlights" className='container'>
        <h2>This weeks specials!</h2>
        <ActionButton label="Online Menu" id="menu-button"/>
        <div className='card-swipe'>
          <DishCard imageSrc={GreekSaladImg} dishName={"Greek Salad"} price={"$12.99"} description={lorem}/>
          <DishCard imageSrc={BruchettaImg} dishName={"Bruchetta"} price={"$5.99"} description={lorem}/>
          <DishCard imageSrc={LemonDessertImg} dishName={"Lemon Dessert"} price={"$5.00"} description={lorem}/>
        </div>
      </section>
      <section id="testimonials" className='container'>
        <h2 className='white'>Testimonials</h2>
        <div className='card-swipe'>
          <UserReviewCard imageSrc={BruchettaImg} userName={"User Name"} rating={5} comment={lorem}/>
          <UserReviewCard imageSrc={BruchettaImg} userName={"User Name"} rating={3} comment={lorem}/>
          <UserReviewCard imageSrc={BruchettaImg} userName={"User Name"} rating={4} comment={lorem}/>
        </div>
      </section>
      <section id="about" className='container'>
          <div className='text-block'>
          <h2>Little Lemon</h2>
          <h2>Chicago</h2>
          <p className='lead-text'>{lorem}</p>
        </div>
        <img src={chefPhotoA} className='image' id="chef-photo-a" alt='Preview of the food'/>
        <img src={chefPhoto} className='image' id="chef-photo" alt='Preview of the food'/>
        <img src={chefPhotoB} className='image' id="chef-photo-b" alt='Preview of the food'/>
      </section>
    </main>
  )
}

export default Main;
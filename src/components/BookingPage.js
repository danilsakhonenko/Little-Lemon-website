import React from 'react'
import BookingForm from './BookingForm'

function BookingPage() {
  let lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere."
  return (
    <main className='container' id='booking'>
      <BookingForm/>
    </main>
  )
}

export default BookingPage;
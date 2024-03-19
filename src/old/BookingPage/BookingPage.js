import React, { useEffect, useReducer} from "react";
import BookingForm from './Form/BookingForm';
import { fetchAPI, submitAPI} from "../../api/AvaliableTimes";
import { useNavigate } from 'react-router-dom';

function reducer(state, action){
  switch(action.type){
    case 'updateDate':
      return {date:action.date, times: []}
    case 'updateTimes':
      return {date:state.date, times: action.avaliableTimes}
    default:
      return state;

  }
}

function BookingPage() {
  const [state, dispatch] = useReducer(reducer, { date: new Date().toISOString().split('T')[0] ,times: []});
  const navigate = useNavigate();

  const updateTimes = (date) => {
    console.log("update");
    fetchAPI(date)
    .then((response)=> dispatch({type: 'updateTimes', avaliableTimes: response}))
    .catch((error) => {console.log(error); dispatch({type: 'updateTimes', date: date, avaliableTimes: []})});
  };

  useEffect(()=>{
    updateTimes(state.date);
  },[state.date]);

  const submitForm=(formData)=>{
    submitAPI(formData)
    .then((response)=>{response && navigate('/booking-confirmation', 
    {state: { date: formData.date, time: formData.time, guests:formData.guests, email:formData.email}});})
    .catch((error) => {console.log(error)});
  }

  return (
    <main className="container">
      <BookingForm times={state.times} dispatch={dispatch} submitForm={submitForm}/>
    </main>
  );
}

export default BookingPage;

import React from "react";

function UserReviewCard(props) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span className='rating-star' key={index}>{index < props.rating ? '★' : '☆'}</span>
      ));

  return (
    <article className="review-card">
      <img src={props.imageSrc} className="image profile-image" alt="Dish" />
      <p className="title-text">{props.userName}</p>
      <p>{stars}</p>
      <p className="paragraph-text user-comment overflow-text">{props.comment}</p>
    </article>
  );
}

export default UserReviewCard;

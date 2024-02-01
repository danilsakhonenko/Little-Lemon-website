import React from "react";
import UserAvatar from '../UserAvatar.png'
import UserReviewCard from './UserReviewCard';

const ReviewsList = ({ children }) => {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere.";
    const reviewsData = [
        {
          id: 1,
          name: "Tucker Mari",
          comment: lorem,
          rating: 4,
          imageUrl: UserAvatar,
        },
        {
          id: 2,
          name: "Katelynn Sherburne",
          comment: lorem,
          rating: 5,
          imageUrl: UserAvatar,
        },
        {
          id: 3,
          name: "Rosario Normand",
          comment: lorem,
          rating: 4,
          imageUrl: UserAvatar,
        },
        {
          id: 4,
          name: "Alora Mathews",
          comment: lorem,
          rating: 3,
          imageUrl: UserAvatar,
        },
        {
          id: 5,
          name: "Kayla Osbourne",
          comment: lorem,
          rating: 5,
          imageUrl: UserAvatar,
        },
      ];
  return (
    <>
      {reviewsData.map((userReview) => (
            <UserReviewCard
              key={userReview.id}
              imageSrc={userReview.imageUrl}
              userName={userReview.name}
              rating={userReview.rating}
              comment={userReview.comment}
            />
          ))}
    </>
  );
};

export default ReviewsList;

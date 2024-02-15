import React from "react";
import UserAvatar from '../images/UserAvatar.png'
import UserReviewCard from './UserReviewCard';

const ReviewsList = () => {
    const reviewsData = [
        {
          id: 1,
          name: "Tucker Mari",
          comment: "Wonderful dining spot! The ambiance was cozy, and the food was delicious. A few minor hiccups with the service, but nothing to detract from the overall experience.",
          rating: 4,
          imageUrl: UserAvatar,
        },
        {
          id: 2,
          name: "Katelynn Sherburne",
          comment: "Impressive service and exquisite cuisine! The attention to detail in each dish was remarkable. Can't wait to return for another memorable meal.",
          rating: 5,
          imageUrl: UserAvatar,
        },
        {
          id: 3,
          name: "Rosario Normand",
          comment: "Great food and atmosphere! While the service was top-notch, I felt that some dishes could have been more flavorful. Overall, a pleasant dining experience.",
          rating: 4,
          imageUrl: UserAvatar,
        },
        {
          id: 4,
          name: "Alora Mathews",
          comment: "Decent restaurant with good food. The service was a bit slow, and some dishes lacked the wow factor. However, the ambiance was pleasant and the staff friendly.",
          rating: 3,
          imageUrl: UserAvatar,
        },
        {
          id: 5,
          name: "Kayla Osbourne",
          comment: "Exceptional spot! From the warm ambiance to the delectable dishes, Restaurant 2 never disappoints. Every bite was a delight. Definitely a must-visit!",
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

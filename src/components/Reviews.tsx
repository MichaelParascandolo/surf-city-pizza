import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const reviews = [
    {
      name: "Susan",
      text: '"Absolutely the best pizza on the island! The ingredients are fresh, the crust is tasty and crisp (but not overcooked) and the price is right! Definitely a place to go when your visiting (or living) on the island! A+"',
    },
    {
      name: "Jimmy",
      text: '"Great pizza! Quick and easy, waste no time, and employees were pleasant and very understanding that you are at the beach for rest and relaxation and do not waste any time keeping you there!"',
    },
    {
      name: "Avery",
      text: '"Simply one of the best pizzerias you can find on the island. Whenever I visit surf city for summer vacation I like to order a pie, walk over a pick it up and walk it back over to the beach house."',
    },
  ];

  return (
    <section className="p-3 bg-light" id="reviews">
      <h2>What Our Customers Say</h2>
      <div className="container">
        <div className="row">
          {reviews.map((review, index) => (
            <ReviewItem key={index} name={review.name} text={review.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

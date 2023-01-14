import Reviewitem from "./Reviewitem";

function Reviews() {
  return (
    <>
      <section className="p-3 bg-light" id="reviews">
        <h2>What Our Customers Say</h2>
        <div className="container">
          <div className="row">
            <Reviewitem
              name={"Susan"}
              text={
                '"Absolutely the best pizza on the island! The ingredients are fresh, the crust is tasty and crisp (but not overcooked) and the price is right! Definitely a place to go when your visiting (or living) on the island! A+"'
              }
            />
            <Reviewitem
              name={"Avery"}
              text={
                '"Simply one of the best pizzerias you can find on the island. Whenever I visit surf city for summer vacation I like to order a pie, walk over a pick it up and walk it back over to the beach house. Their pizza is so fresh out of the oven and the staff there are wonderful. Definitely will be coming back."'
              }
            />
            {/* <Reviewitem
              name={"Jimmy"}
              text={
                '"Great pizza! Quick and easy, waste no time, employees were pleasant and very understanding that you are at the beach for R&R and do not waste anytime keeping you there! I have gone to pizza places all over jersey and something about Surf City keeps me coming back every time I am in the area."'
              }
            /> */}
            <Reviewitem
              name={"Thomas"}
              text={
                '"The pizza is out of this world. We took my mom here for the first time and she was amazed. Pizza usually gives her an upset stomach. She had no problems with it. The staff are friendly too. They have eat in or take out."'
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;

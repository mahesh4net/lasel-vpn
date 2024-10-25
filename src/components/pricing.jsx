import Pricingcards from "./pricingcards";

export default function Pricing() {
  return (
    <>
      <div className="pricing-section">
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and <br></br> cheerfully.
        </p>

        <div className="cards-container">
          <Pricingcards></Pricingcards>
        </div>
      </div>
    </>
  );
}

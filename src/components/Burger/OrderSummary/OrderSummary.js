import React from "react";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>This is your order ingredients:</p>
      <ul>{ingSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.buy}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;

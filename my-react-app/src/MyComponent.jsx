import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };
  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
        ></input>
        <p>Quantity: {quantity}</p>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Delivery Instructions"
        ></textarea>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an Option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>
        <label>
          <input
            type="radio"
            value="Pickup"
            checked={shipping === "Pickup"}
            onChange={handleShippingChange}
          />
          Pickup
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default MyComponent;

import Modal from "../../UI/Containers/Modal";
import classes from "../../UI/CSS/Cart.module.css";
import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import { useState } from "react";
import CheckoutForm from "../../Forms/CheckoutForm";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [showCheckoutForm, setCheckoutForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckoutForm(true);
  };

  const formConfirmHandler = async (userInfo) => {
    await fetch(
      "https://food-app-10ae0-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          userInfo: userInfo,
          items: cartCtx.items,
        }),
      }
    );

    setIsSubmitted(true);

    setCheckoutForm(false);
    cartCtx.reset();
  };

  const cartItems = (
    <>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => {
              cartItemRemoveHandler(item.id);
            }}
            onAdd={() => {
              cartItemAddHandler(item);
            }}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
    </>
  );

  const cartActions = (
    <>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </>
  );

  const checkoutForm = (
    <CheckoutForm onConfirm={formConfirmHandler} onCancel={props.onClose} />
  );

  const formDidSubmit = <p>Request sent successfuly!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitted && cartItems}
      {isSubmitted && formDidSubmit}
      {!showCheckoutForm && cartActions}
      {showCheckoutForm && checkoutForm}
    </Modal>
  );
}

export default Cart;

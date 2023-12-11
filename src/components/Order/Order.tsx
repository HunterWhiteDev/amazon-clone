import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
//@ts-ignore
import CurrencyFormat from "react-currency-format";

interface OrderProps {
  order: {
    data: {
      created: number;
      basket: any[];
      amount: number;
    };
    id: string;
  };
}

function Order({ order }: OrderProps) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{new Date(order.data.created * 1000).toDateString()}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value: string | number) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;

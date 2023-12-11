import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "../../components/Order/Order";
import { collection, orderBy, getDocs, query } from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const ordersRef = collection(db, `users/${user?.uid}/orders`);
        const q = query(ordersRef, orderBy("created", "asc"));
        const ordersRes = await getDocs(q);
        let ordersArr: any[] = [];
        ordersRes.docs.forEach((doc) => {
          ordersArr.unshift({ data: doc.data(), id: doc.id });
        });

        setOrders(ordersArr);
      };
      getData();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

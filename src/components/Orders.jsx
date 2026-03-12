import { useEffect, useState } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Orders</h2>

      {orders.map((order, index) => (
        <div key={index}>
          {order.items.map((item,i)=>(
            <p key={i}>{item.name} - ₹{item.price}</p>
          ))}
        </div>
      ))}

    </div>
  );
}

export default Orders;
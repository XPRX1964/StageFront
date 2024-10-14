import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, newQuantity);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const removedItem = cart[index]; // Get the item being removed
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show the notification
    setNotificationProductName(removedItem.name); // Use the name of the removed item
    setShowNotification(true);

    // Hide the notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProductName, setNotificationProductName] = useState("");
  return (
    <>
      <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px] ">
        <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
          <span className="text-gray-500  ">
            {" "}
            <Link to="/"> HOME </Link>{" "}
          </span>
        </div>
        <span>/ CART</span>
      </div>
      <div className="container mx-auto p-4 font-poppins font-medium">
        <h1 className="text-2xl font-medium mb-4">Your Cart Items</h1>
        {cart.length > 0 ? (
          <>
            <table className="w-full">
              <thead>
                <tr className="bg-[#f7f7f7]">
                  <th className="text-left laptopl:px-[45px] py-[22px] s:px-[20px] laptop:px-[35px]">
                    Product
                  </th>
                  <th className="text-left laptopl:px-[45px] py-[22px] s:px-[20px] laptop:px-[35px]">
                    Price
                  </th>
                  <th className="laptopl:px-[45px] py-[22px] s:px-[20px] laptop:px-[35px] text-left">
                    Quantity
                  </th>
                  <th className="text-left laptopl:px-[45px] py-[22px] s:px-[20px] laptop:px-[35px]">
                    Total
                  </th>
                  <th className="text-left laptopl:px-[45px] py-[22px] s:px-[20px] laptop:px-[35px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="pl-[30px] py-[30px] ">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-2"
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="pl-[30px] py-[30px]">${item.price}</td>
                    <td className="pl-[30px] py-[30px]">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(index, parseInt(e.target.value))
                        }
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="pl-[30px] py-[30px]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="pl-[30px] py-[30px]">
                      <button
                        onClick={() => removeItem(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <strong>Total: ${calculateTotal()}</strong>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center font-poppins">
            <div className="flex justify-center items-center mb-[30px] ">
              {" "}
              <EmptyCart />
            </div>
            <div>
              <p>No items found in cart</p>
            </div>
            <div>
              <Link to="/shop">
                {" "}
                <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#525963] hover:bg-[red-100] border border-black group px-[35px] py-[15px] mt-[30px]">
                  <span className="w-56 h-48 rounded bg-red-600 absolute bottom-0 left-0 translate-x-full ease-out duration-[700ms] transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white font-poppins transition-colors duration-300 ease-in-out group-hover:text-white">
                    SHOP NOW
                  </span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {showNotification && (
        <div className="fixed z-50 bottom-3 left-3 ">
          <div className=" flex justify-center items-center bg-slate-400 p-2 rounded">
            <span className="font-poppins text-red-600">
              {notificationProductName}&nbsp;
            </span>
            <span className="text-white"> removed from cart ❌</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

import React, { useState, useEffect } from "react";
import HeartEmpty from "./HeartEmpty";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    };

    loadFavorites();
    window.addEventListener("storage", loadFavorites);

    return () => {
      window.removeEventListener("storage", loadFavorites);
    };
  }, []);

  const removeFavorite = (productName) => {
    const updatedFavorites = favorites.filter(
      (item) => item.name !== productName
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Show notification
    setNotificationMessage(`${productName} removed from favorites`);
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = existingCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (productIndex >= 0) {
      existingCart[productIndex].quantity += 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Show notification for adding to cart
    setNotificationMessage(`${item.name} added to cart`);
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center font-poppins">
          <div className="flex justify-center items-center mb-[30px] ">
            <HeartEmpty />
          </div>
          <div>
            <p>No items found in cart</p>
          </div>
          <div>
            <Link to="/shop">
              <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#525963] hover:bg-[red-100] border border-black group px-[35px] py-[15px] mt-[30px]">
                <span className="w-56 h-48 rounded bg-red-600 absolute bottom-0 left-0 translate-x-full ease-out duration-[700ms] transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white font-poppins transition-colors duration-300 ease-in-out group-hover:text-white">
                  SHOP NOW
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="border p-2">
                  <div className="flex justify-center items-center">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                </td>
                <td className="border p-2">
                  <div className="flex justify-center items-center">
                    {item.name}
                  </div>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    ${item.price}
                  </div>
                </td>
                <td className="border p-2">
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <button
                      onClick={() => removeFavorite(item.name)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-400 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed z-50 bottom-3 left-3">
          <div className="flex justify-center items-center bg-gray-600 p-2 rounded">
            <span className="font-poppins text-white">
              {notificationMessage} ✅
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;

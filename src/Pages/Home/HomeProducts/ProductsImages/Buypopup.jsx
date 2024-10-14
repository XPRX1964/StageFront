import { useState, useEffect } from "react";
import HeartIcon from "../../../../Components/Header/HeartIcon";
import ShopingCart from "../../../../Components/Header/ShopingCart";
import EyeSvg from "../EyeSvg";
import ProductCard from "../../../../Components/ProductCard/ProductCard";

const Buypopup = ({ imgsrc, productname, price, quantity }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProductName, setNotificationProductName] = useState("");
  const [notificationAction, setNotificationAction] = useState("");

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((item) => item.name === productname));
  }, [productname]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;
    let action;

    if (isFavorite) {
      updatedFavorites = favorites.filter((item) => item.name !== productname);
      action = "removed from";
    } else {
      updatedFavorites = [
        ...favorites,
        { name: productname, image: imgsrc, price: price },
      ];
      action = "added to";
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    // Show notification
    setNotificationProductName(productname);
    setNotificationAction(action);
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const addToCart = () => {
    const product = {
      name: productname,
      price: price,
      image: imgsrc,
      quantity: 1,
    };

    console.log("Product:", product.name);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = existingCart.findIndex(
      (item) => item.name === product.name
    );

    if (productIndex >= 0) {
      existingCart[productIndex].quantity += 1;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Show the notification
    setNotificationProductName(product.name);
    setNotificationAction("added to cart");
    setShowNotification(true);

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <button onClick={toggleFavorite}>
          <div className="h-[40px] w-[40px] flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 transition-opacity duration-300 delay-[120ms] hover:transition hover:duration-300 ease-in-out">
            <HeartIcon
              color="white"
              fill={isFavorite ? "white" : "none"}
              animate="hover:animate-pulse"
            />
          </div>
        </button>
        <button
          className="flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={addToCart}
        >
          <div
            className={`flex-1 group flex justify-center items-center text-white gap-2 font-poppins opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 h-[40px] delay-[180ms] transition-all duration-700 ease-in-out`}
          >
            <div
              className={`flex items-center justify-center ${
                isHovered ? "animate-pulse" : ""
              }`}
            >
              <span>Add To Cart</span>
            </div>
            <div className="flex p-1">
              <ShopingCart
                color="white"
                className={`${isHovered ? "animate-pulse" : ""}`}
              />
            </div>
          </div>
        </button>

        <button onClick={handlePopupToggle}>
          <div className="h-[40px] w-[40px] flex justify-center items-center opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 transition-opacity duration-1000 delay-[240ms] p-[6px] hover:transition hover:duration-300 ease-in-out">
            <EyeSvg color="white" className="hover:animate-pulse" />
          </div>
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="relative bg-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 bg-red-500 text-white z-50 px-2 py-1 rounded"
              onClick={handlePopupToggle}
            >
              X
            </button>
            <ProductCard
              imgsrc={imgsrc}
              productname={productname}
              price={price}
              quantity={quantity}
            />
          </div>
        </div>
      )}

      {showNotification && (
        <div className="fixed z-50 bottom-3 left-3">
          <div className="flex justify-center items-center bg-slate-400 p-2 rounded">
            <span className="font-poppins text-green-400">
              {notificationProductName}&nbsp;
            </span>
            <span className="text-white">
              {notificationAction} Favorites ✅
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Buypopup;

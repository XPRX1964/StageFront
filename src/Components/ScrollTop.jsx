import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Optionally, you can also manually scroll on link clicks to ensure
  // it scrolls to the top even if you're navigating to the same route
  useEffect(() => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    // Add click event listener to all internal links
    const links = document.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", handleClick));

    // Cleanup on unmount
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
};

export default ScrollToTop;

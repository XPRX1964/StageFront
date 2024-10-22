import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

// Function to check if the token is expired
const isTokenExpired = (token) => {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return decodedToken.exp * 1000 < Date.now(); // Check if token expiry is before the current time
};

// Request Interceptor to add token to request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && !isTokenExpired(token)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("Token is undefined, null, or expired");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to handle token refresh logic (if needed)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the response status is 401 and it is not a refresh token request
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Prevent infinite loops
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/auth/refresh-token",
            {
              refreshToken,
            }
          );

          // Check if the refresh was successful
          if (res.status === 200) {
            const newToken = res.data.token;
            localStorage.setItem("token", newToken);

            // Update the original request with the new token and retry
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return axiosInstance(originalRequest); // Retry the original request
          } else {
            console.error("Refresh token failed:", res.data);
            // Optional: Redirect to login if refresh fails
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            window.location.href = "/login"; // Or use your routing method
          }
        } catch (err) {
          console.error("Token refresh failed: ", err);
          // Optional: Redirect to login on refresh failure
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // Or use your routing method
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

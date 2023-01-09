export const grabToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  
  export const storeToken = (token) => {
    localStorage.setItem("token", token);
  };
const BASEURL = "https://fakestoreapi.com";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Login failed!");
    }
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("Error /Login user", error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASEURL}/products`);
    if (!response.ok) {
      throw new Error("Network response /GET all products failed!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET all products", error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASEURL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`There was an error getting product ${id}`, error);
  }
};
